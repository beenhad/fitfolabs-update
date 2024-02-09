import { useEffect } from "react";

const TypeForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";

    setTimeout(() => {
      document.head.appendChild(script);
    }, 1000);
  }, []);

  return (
    <>
      <div
        data-tf-widget="YODn1GhG"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Fitfo Labs"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        data-tf-inline-on-mobile
        data-tf-hidden="utm_source={},utm_medium={},utm_campaign={}"
        className="w-full lg:w-[85%] mx-auto h-[300px] lg:h-[500px]"
      ></div>
    </>
  );
};

export default TypeForm;
