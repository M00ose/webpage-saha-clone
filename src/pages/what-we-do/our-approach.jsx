import React from "react";

const Approach = (props) => {
  return (
    <div className={props.visibility}>
      <div className="space-y-4">
        <p>
          Saha Global provides access to safe drinking water to rural
          communities in Northern Region Ghana. We partner with rural
          communities who lack access to safe drinking water, but do have access
          to contaminated surface water sources. We then train local women to
          use locally available products to treat the contaminated water and
          make it safe to drink. The women then sell the clean water to their
          community at an affordable price.
        </p>
        <p>
          Saha donates the capital equipment needed to start each businesses,
          but does not provide any financial support after the business is open.
          This initial donation helps to keep the cost of running the business
          low-enough that the entrepreneurs can charge their community, where
          most people live on less than $2/day, affordable prices for their
          services. Each business is completely owned and operated by the women
          entrepreneurs and are financially sustainable.
        </p>
        <p>
          Saha will not implement a new businesses unless we have raised the
          funds for 10 years of monitoring and evaluation. Even including this
          cost, our water businesses are a fraction of the cost of drilling a
          well or borehore. Everyday, Our Customer Care team visits our partner
          communities to check-in with the women entrepreneurs, offer businesses
          advice and long-term training. We believe that our commitment to
          monitoring, combined with our use of simple and locally available
          technology, has been the{" "}
          <a href="https://sahaglobal.org/what-we-do/sustainability/">
            key to our long-term success in our partner communities.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Approach;
