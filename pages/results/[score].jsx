import React from "react";
import { useRouter } from "next/router";
import { Panel } from "rsuite";
import { testResults } from "../../config/constants";


const Results = () => {
  const router = useRouter();
  const { score } = router.query;
  const result = score > 8 ? testResults[2] : testResults[1];
  const title = score > 8 ? "You are an extrovert" : "You are more of an introvert";
  const img = score > 8 ? "/images/extrovert.png" : "/images/introvert.jpg"



  return (
    <div className="p-16">
      <div className="p-10">
        <Panel
          bordered
          header={
            <div className="flex flex-col justify-center items-center space-y-2">
              <img src={img} alt="result picture" className="w-36" />
              <div>Your result</div>
            </div>
          }
        >
          <div className="space-y-5 flex flex-col jusitfy-center items-center">
            <div className="text-2xl">{title}</div>
            <div>{result}</div>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Results;