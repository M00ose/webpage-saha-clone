import React from "react";

import { Card, Button, Label, TextInput } from "flowbite-react";

const BlogFeed = () => {
  return (
    <div className="px-6 md:px-0 py-14">
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Saha continues to grow! Learn about our new office and team.
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Tuesday, January 3, 2023
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          One of Saha&apos;s superpowers (if we do say so ourselves!) is our
          ability to adapt and evolve based on the needs of our field team
          members, the entrepreneurs running the clean water businesses, and the
          communities who rely on those businesses. Over the past year, as our
          work has continued to grow and we&apos;ve expanded...
          <span>
            <a
              className="text-primary underline hover:transition-transform"
              href="#"
            >
              Read more
            </a>
          </span>
        </p>
        <div>
          <div className="mb-2 flex flex-row gap-4 items-center">
            <p className="font-serif font-bold text-offBlack uppercase">
              Get regular blog updates
            </p>
            <TextInput
              id="email4"
              type="email"
              placeholder="name@email.com"
              required={true}
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-offBlack">
              Sign up
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogFeed;
