import Image from "next/image";
import React, { useState } from "react";
import { Button } from "rsuite";
import PersonalityModule from "../components/PersonalityModule/PersonalityModule";

const MainPage = () => {
  const [startTest, setStartTest] = useState(false)
  return (
    <div className="w-full h-full p-16">
      <div className="p-10 flex flex-col justify-center items-center space-y-10 w-full">
        <div className="text-5xl">Personality Test</div>
        <div className="w-full flex justify-center items-center">
          {
            !startTest ?
              <div className="space-y-5 flex flex-col">
                <Image src="/images/cover.jpg" width={500} height={500} alt="cover" />
                <Button
                  onClick={() => setStartTest(true)}
                  className="bg-blue-600"
                  color="blue"
                  appearance="primary">
                  Start test
                </Button>
              </div>
              :
              <PersonalityModule />
          }
        </div>
      </div>
    </div>
  );
};

export default MainPage;
