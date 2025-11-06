import { Children } from "react";

// import Image from "next/image";
const Button = ({ text }) => {
  return (
    <>
      <button className=" rounded-lg bg-orange-400 px-8 py-3 text-white">
        {text}
      </button>
    </>
  );
};
const Page = ({ children }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-10">
        {children}
      </div>
    </>
  );
};
const Cards = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-9 p-6 justify-center border-2 border-gray-200 rounded-lg">
        {children}
      </div>
    </div>
  );
};
const Num = ({ children }) => {
  return (
    <div className="w-10 h-10 border-amber-500 border-2 rounded-4xl text-amber-500 flex items-center justify-center">
      {children}
    </div>
  );
};
const InfoBox = ({ children }) => {
  return (
    <div className="flex-1 p-5 gap-8 flex flex-row">
      <div>{children}</div>
    </div>
  );
};
const Propertycard = ({ children }) => {
  return <>
  <img/>
  <div>
    
  </div>
  </>;
};
const HomePage = () => {
  return (
    <>
      <main className="flex flex-col items-center px-4 py-16 gap-10">
        <Page>
          <div className="flex flex-col items-center">
            <h>Smart Tools</h>
            <h>Real Experts, Easy Moves</h>
            <p>Your journey to finding the perfect home starts here</p>{" "}
          </div>
          <div className=" w-full h-full grid grid-cols-3 gap-6">
            <Cards>
              <img src="./public/App.pmg"></img>
              <h3>Top-End Curation</h3>
              <p>Carefully selected properties that meet our high s</p>
            </Cards>
            <Cards>
              <img src="./public/App.pmg"></img>
              <h3>Top-End Curation</h3>
              <p>Carefully selected properties that meet our high s</p>
            </Cards>
            <Cards>
              <img src="./public/App.pmg"></img>
              <h3>Top-End Curation</h3>
              <p>Carefully selected properties that meet our high s</p>
            </Cards>
          </div>
          <Button text="Get Started" />
        </Page>
        <Page>
          <div>
            <h2>
              Buying doesn't have to <br /> Be overwhelming
            </h2>
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-8">
            <InfoBox>
              <Num>1</Num>
              <h3>Browse Curated Homes</h3>
              <p>
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </InfoBox>
            <InfoBox>
              <Num>1</Num>
              <h3>Browse Curated Homes</h3>
              <p>
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </InfoBox>
            <InfoBox>
              <Num>1</Num>
              <h3>Browse Curated Homes</h3>
              <p>
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </InfoBox>
            <InfoBox>
              <Num>1</Num>
              <h3>Browse Curated Homes</h3>
              <p>
                Explore our carefully selected collection of properties that
                match your lifestyle and budget. Every listing is verified and
                includes detailed information.
              </p>
            </InfoBox>
          </div>
        </Page>
        <Page>
          <h3>Explore Properties</h3>
        </Page>
        <Page></Page>
        <Page></Page>
        <Page></Page>
        <Page></Page>
      </main>
    </>
  );
};

export default HomePage;
