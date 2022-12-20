import Image from "next/image";
import React, { useState } from "react";
import { Button } from "rsuite";
import PersonalityModule from "../components/PersonalityModule/PersonalityModule";

const Main = () => {
  const [startTest, setStartTest] = useState(false)
  return (
    <div className="h-full p-16">
      <div className="p-10 flex flex-col justify-center items-center space-y-5">
        <div className="text-5xl">Personality Test</div>
        <div>
          {
            !startTest ?
              <div className="space-y-5 flex flex-col justify-center">
                <Image src="/images/cover.jpg" width={500} height={500} alt="cover" />
                <Button
                  onClick={() => setStartTest(true)}
                  className="bg-blue-500"
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
}

export default Main;
