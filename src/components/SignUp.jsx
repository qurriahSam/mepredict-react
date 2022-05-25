import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";

const SignUp = () => {
  return (
    <div className="text-white">
      <Typography variant="h2" className="text-center pt-12">
        Sign Up
      </Typography>
      <div className="mt-8 w-96 mx-auto bg-indigo-500 p-10">
        <form>
          <div className="pb-5">
            <Typography>Username:</Typography>
            <Input label="username" type="text" className="mb-4" />
          </div>
          <div className="pb-5">
            <Typography>Email:</Typography>
            <Input label="email" type="email" className="mb-4" />
          </div>
          <div className="pb-5">
            <Typography>Password:</Typography>
            <Input label="password" type="password" className="mb-4" />
          </div>
          <div className="pb-5">
            <Typography>Confirm Password:</Typography>
            <Input label="confirmPassword" type="password" className="mb-4" />
          </div>
          <div className="grid">
            <Button ripple={true} type="submit" className="bg-[#44ff00] px-14 place-self-center">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
