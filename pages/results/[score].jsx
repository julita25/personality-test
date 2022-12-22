import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Panel, Loader } from "rsuite";
import { testResults } from "../../config/constants";

const ResultsPage = () => {
  const router = useRouter();
  const { score } = router.query;

  const result = score > 8 ? testResults[2] : testResults[1];
  const title = score > 8 ? "You are an extrovert" : "You are more of an introvert";
  const img = score > 8 ? "/images/extrovert.png" : "/images/introvert.jpg";

  if (!score) return <Loader size="lg" center />

  return (
    <div className="p-16 flex justify-center items-center">
      <div className="p-10 space-y-5 flex flex-col justify-center items-start w-2/3">
        <Panel
          className="bg-white"
          bordered
          header={(
            <div className="flex flex-col justify-center items-center space-y-2">
              <img src={img} alt="result picture" className="w-42" />
              <div>Your result</div>
            </div>
          )}
        >
          <div className="space-y-5 flex flex-col jusitfy-center items-center">
            <div className="text-2xl">{title}</div>
            <div>{result}</div>
          </div>
        </Panel>
        <Button
          onClick={() => router.push("/")}
          appearance="primary"
          color="blue"
          className="bg-blue-600"
        >
          Retake test
        </Button>
      </div>
    </div>
  );
};

export default ResultsPage;
