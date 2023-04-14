import React from "react";
import Image from "next/image";

import styles from "@/styles";
import { Timeline } from "flowbite-react";

const WaterBusiness = (props) => {
  return (
    <div className={`${props.visibility} space-y-4`}>
      <p>
        Saha trains women from rural villages how to launch small, clean water
        businesses that provide safe water to their community at a price that
        all can afford. For the past twelve years, Saha Global has worked
        exclusively in the Northern Region of Ghana, where we have 389 water
        businesses that provide safe drinking water to 127,062 people.
      </p>
      <h2 className={`${styles.header2} text-3xl font-extrabold`}>
        Six Steps to Clean Drinking Water
      </h2>
      <h3 className={styles.header2}>1. Community Engagement</h3>
      <p>
        Saha works with local governments to identify villages that rely solely
        on contaminated surface water sources. Local leaders nominate two to
        five women to become Saha entrepreneurs to start a water treatment
        business.
      </p>
      <h3 className={styles.header2}>2. Startup Toolkit</h3>
      <p>
        We provide each business with locally available materials to build a
        water treatment center in the village, including a 1,000- liter
        Polytank, a metal Polytank stand, and three blue 200-liter drums.
      </p>
      <h3 className={styles.header2}>3. Women&apos;s Training</h3>
      <p>
        Women learn to treat the water from contaminated sources to make it safe
        to drink and to run the water business, including pricing, frequency of
        treatment, and social marketing.
      </p>
      <h3 className={styles.header2}>4. Community Education</h3>
      <p>
        Saha visits every household in the village to educate families about
        clean water, explain the water business to them, and distribute safe
        storage containers (SSCs) that prevent water re-contamination in the
        home.
      </p>
      <h3 className={styles.header2}>5. Water Treatment</h3>
      <p>
        Women entrepreneurs fetch dirty water from the dugout, fill up the
        drums, and treat the water with aluminum sulfate that causes sediments
        to settle to the bottom of the drums, leaving the water clear. They
        transfer the clear water into the Polytank where they disinfect it with
        chlorine. They sell the treated water for a price that everyone in the
        village can afford. Villagers then store the treated water in SSCs.
      </p>
      <h3 className={styles.header2}>6. Customer Care</h3>
      <p>
        Women entrepreneurs receive ongoing mentoring and business advice from
        Saha until they can run their business independently. We monitor water
        quality and consumption in the village for 10 years – the amount of time
        it takes for us to collect solid, accurate data.
      </p>
      <p>
        Click through the picture gallery below to learn more about the
        treatment processes currently in use at the water businesses in Ghana.
      </p>
      <h2 className={`${styles.header2} text-3xl font-extrabold`}>
        How It Works
      </h2>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Image
              key="timeline-1"
              src="/water-business/pic-about-water-businesses-01.jpg"
              alt="women fetching water"
              width={500}
              height={500}
            />
            <Timeline.Body>
              First, women fetch water from their local surface water source,
              called a dugout. In most rural communities in northern Ghana,
              people have no other option but to to drink this fecally
              contaminated water.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Image
            key="timeline-2"
            src="/water-business/pic-about-water-businesses-02.jpg"
            alt="women fetching water"
            width={500}
            height={500}
          />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>Text here</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default WaterBusiness;
