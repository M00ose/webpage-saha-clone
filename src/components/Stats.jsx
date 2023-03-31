import React from "react";

const Stats = () => {
  return (
    <div class="bg-white py-8 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">
              Women entrepreneurs trained
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-primary">
              1,109
            </dd>
          </div>

          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">
              Clean water businesses
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-primary">
              389
            </dd>
          </div>

          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">People served</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-primary">
              127,062
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
