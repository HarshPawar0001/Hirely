import { zodResolver } from '@hookform/resolvers/zod';

import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { State } from 'country-state-city';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Form, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '@/hooks/use-fetch';
import { getCompanies } from '@/api/api.Companies';
import { useUser } from '@clerk/clerk-react';
import { BarLoader } from 'react-spinners';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button';
import { addNewJob } from '@/api/apiJobs';
import AddCompanyDrawer from '@/components/add-company-drawer';



const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Select a location" }),
  company_id: z.string().min(1, { message: "Select or Add a new Company" }),
  requirements: z.string().min(1, { message: "Requirements are required" }),
});


const PostJob = () => {
  const { user, isLoaded } = useUser(); 
  const navigate = useNavigate();


  

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { location: "", company_id: "", requirements: "" },
    resolver: zodResolver(schema),
  });

  

  const {
    loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  const {
    loading: loadingCreateJob,
    error: errorCreateJob,
    data: dataCreateJob,
    fn: fnCreateJob,
  } = useFetch(addNewJob);

  useEffect(() => {
    if (dataCreateJob?.length > 0) navigate("/jobs");
  }, [loadingCreateJob]);

  const onSubmit = (data) => {
    fnCreateJob({
      ...data,
      recruiter_id: user.id,
      isOpen: true,
    });
  };

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingCompanies) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }
// 
  if (user?.unsafeMetadata?.role !=="recruiter") {
    console.log(user?.unsafeMetadata?.role);
    console.log("recruiter");
   
    return <Navigate to="/jobs" />;
  }

  return  <div>
     <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        Post a Job
      </h1> 

      <Form 
       onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 pb-0">

      <Input placeholder="Job Title" {...register("title")} />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>} 
     


      <Textarea placeholder="Job Description" {...register("description")} />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="flex gap-4 items-center">
        <Controller
            name="location"
            control={control}
            render={({ field }) => (
        <Select 
        value={field.value} 
          onValueChange={field.onChange}
          >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Filter by Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {State.getStatesOfCountry("IN").map(({ name }) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
     )}
     />

<Controller
            name="company_id"
            control={control}
            render={({ field }) => (
    <Select
      value={field.value} onValueChange={field.onChange}
     >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Company" >
        {field.value
                      ? companies?.find((com) => com.id === Number(field.value))
                          ?.name
                      : "Company"}
                          
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        {companies?.map(({ name, id }) => (
                      <SelectItem key={name} value={id}>
                        {name}
                      </SelectItem>
                    ))}
        </SelectGroup>
      </SelectContent>
    </Select>
            )}
            />

 {/* add company drawer */}
<AddCompanyDrawer fetchCompanies={fnCompanies} />
        </div>
        {errors.location && (
          <p className="text-red-500">{errors.location.message}</p>
        )}
        {errors.company_id && (
          <p className="text-red-500">{errors.company_id.message}</p>
        )} 


       


        <Controller
          name="requirements"
          control={control}
          render={({ field }) => (
            // a small ms word 
            <MDEditor value={field.value} onChange={field.onChange} />
          )}
        />

         {errors.requirements && (
          <p className="text-red-500">{errors.requirements.message}</p>
        )}
         {errors.errorCreateJob && (
          <p className="text-red-500">{errors?.errorCreateJob?.message}</p>
        )}
         {errorCreateJob?.message && (
          <p className="text-red-500">{errorCreateJob?.message}</p>
        )}
       
      {loadingCreateJob && <BarLoader width={"100%"} color="#36d7b7" />}
        <Button type="submit" variant="blue" size="lg" className="mt-2">
          Submit
        </Button>

        </Form>
        
   </div> 
  
}

export default PostJob
