import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer" 
import { Button } from './ui/button'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label } from '@radix-ui/react-label'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from '@/hooks/use-fetch'
import { applyToJob } from '@/api/apiApplications'
import { BarLoader } from 'react-spinners'

const schema = z.object({
    experience: z
      .number()
      .min(0, { message: "Experience must be at least 0" })
      .int(),
    skills: z.string().min(1, { message: "Skills are required" }),
    education: z.enum(["Intermediate", "Graduate", "Post Graduate"], {
      message: "Education is required",
    }),
    resume: z
      .any()
      .refine(
        //check file or not
        (file) =>
          file[0] &&  // if we input file it is in form of array
          (file[0].type === "application/pdf" ||
            file[0].type === "application/msword"),
        { message: "Only PDF or Word documents are allowed" }
      ),
  });
  
const ApplyJobDrawer = ({user, job, applied=false, fetchJob }) => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
      } = useForm({
        resolver: zodResolver(schema),
      });//react hook form


      const {
        loading: loadingApply,
        error: errorApply,
        fn: fnApply,
      } = useFetch(applyToJob );
      const onSubmit = (data) => {
        fnApply({
          ...data,
          job_id: job.id,
          candidate_id: user.id,
          name: user.fullName,
          status: "applied",
          resume: data.resume[0],
        }).then(() => {
          fetchJob();
          reset();
        });
      };
    


  return (
    <div >
        {/* if user has applied never open the drawer  */}
      <Drawer  open={applied ? false : undefined}>
  <DrawerTrigger asChild>
  <Button
          size="lg"
          variant={job?.isOpen && !applied ? "blue" : "destructive"}
          disabled={!job?.isOpen || applied}
        >
          {job?.isOpen ? (applied ? "Applied" : "Apply") : "Hiring Closed"}
        </Button>
  </DrawerTrigger>
  
  <DrawerContent >
    <DrawerHeader>

      <DrawerTitle>  Apply for {job?.title} at {job?.company?.name}</DrawerTitle>
      <DrawerDescription> Please Fill the form below</DrawerDescription>
    </DrawerHeader>
    <form  onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-4 p-4 pb-0">
        <Input type="number" 
        placeholder="Years of Experience"
        className="flex-1 "
        {...register("experience", {
            valueAsNumber: true,
          })}
        />
         {errors.experience && (
            <p className="text-red-500">{errors.experience.message}</p>
          )}
         <Input
            type="text"
            placeholder="Skills (Comma Separated)"
            className="flex-1"
            {...register("skills")}
          />
           {errors.skills && (
            <p className="text-red-500">{errors.skills.message}</p>
          )}
<Controller
            name="education"
            control={control}//control provide access to the form 
            render={({ field }) => (                     // defaultValue="Graduate"
    <RadioGroup onValueChange={field.onChange} {...field} className="flex flex-col gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem
      value="Intermediate"
      id="intermediate"
      className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
    />
    <Label htmlFor="intermediate">Intermediate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem
      value="Graduate"
      id="graduate"
      className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
    />
    <Label htmlFor="graduate">Graduate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem
      value="Post Graduate"
      id="post-graduate"
      className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
    />
    <Label htmlFor="post-graduate">Post Graduate</Label>
  </div>
    </RadioGroup>
    )}
    />
    {errors.education && (
            <p className="text-red-500">{errors.education.message}</p>
          )}

        <Input
            type="file"
            accept=".pdf, .doc, .docx"
            className="flex-1 file:text-gray-500"
            {...register("resume")}
           
          />
          {errors.resume && (
            <p className="text-red-500">{errors.resume.message}</p>
          )}
          {errorApply?.message && (
            <p className="text-red-500">{errorApply?.message}</p>
          )}
           {loadingApply && <BarLoader width={"100%"} color="#36d7b7" />}
    <Button type="submit" variant="blue" size="lg">
            Apply
          </Button>

    </form>
    <DrawerFooter>
     
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </div>
  )
}

export default ApplyJobDrawer
