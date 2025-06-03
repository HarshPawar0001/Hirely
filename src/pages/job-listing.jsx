import { getCompanies } from "@/api/api.Companies";
import { getJobs } from "@/api/apiJobs"
import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { useSession, useUser } from "@clerk/clerk-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { State } from "country-state-city";

import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners";


const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

 const{isLoaded} = useUser();


 const {fn:fnJobs,
  data:jobs,
  loading:loadingJobs,
}=useFetch(getJobs,{
  location,
  company_id, 
  searchQuery,

});


const {
  // loading: loadingCompanies,
  data: companies,
  fn: fnCompanies,
} = useFetch(getCompanies);
useEffect(() => {
  if (isLoaded) {
    fnCompanies();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isLoaded]);

const handleSearch = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);

  const query = formData.get("search-query");
  if (query) setSearchQuery(query);
};


console.log("Jobs returned:", jobs);

  // console.log(dataJobs);
  useEffect(()=>{
    if(isLoaded) fnJobs();
   
  },[isLoaded,location,company_id,searchQuery]);

    if (!isLoaded) {
      return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
    }
  
    const clearFilters = () => {
      setSearchQuery("");
      setCompany_id("");
      setLocation("");
    };


  return(  
  <div className="mx-10">
  <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8 mb-2">
    Latest Jobs
  </h1>
 {/* ADD FILTER */}
 <form
        onSubmit={handleSearch}
        className="h-14 flex flex-row w-full gap-2 items-center mb-6"
      >
        <input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="h-full flex-1  px-4 text-md"
        />
        <Button type="submit" className="h-full sm:w-28" variant="blue">
          Search
        </Button>
      </form>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
  {/* Location Select - 40% */}
  <div className="w-full sm:w-[40%]">
    <Select value={location} onValueChange={(value) => setLocation(value)}>
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
  </div>

  {/* Company Select - 40% */}
  <div className="w-full sm:w-[40%]">
    <Select
      value={company_id}
      onValueChange={(value) => setCompany_id(value)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Filter by Company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {companies?.map(({ name, id }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>

  {/* Clear Filters Button - 20% */}
  <div className="w-full sm:w-[20%]">
    <Button
      className="w-full h-full"
      variant="destructive"
      onClick={clearFilters}
    >
      Clear Filters
    </Button>
  </div>
</div>

  {loadingJobs && (
    <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
  )}

  {loadingJobs === false && (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs?.length ? (
        jobs.map((job) => {
          return (
            <JobCard
            key={job.id}
            job={job}
            savedInit={job?.saved?.length > 0}
          />
          );
        })
      ) : (
        <div>No Jobs Found 😢</div>
      )}
    </div>
  )}
</div>);
}

export default JobListing
