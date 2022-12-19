import React, { useState } from "react";
import { Button } from "rsuite";
import PersonalityModule from "../components/PersonalityModule/PersonalityModule";

const Main = () => {
  const [startTest, setStartTest] = useState(false)
  return (
    <>
      <div className="p-16">
        <div className="p-10">
          <div>Personality Test</div>
          <div>
            {
              !startTest ?
                <Button
                  onClick={() => setStartTest(true)}
                  className="bg-blue-500"
                  color="blue"
                  appearance="primary">
                  Start test
                </Button>
                :
                <PersonalityModule />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
