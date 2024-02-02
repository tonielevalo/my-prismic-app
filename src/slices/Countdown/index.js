"use client";
import CountdownTimer from '@/components/CountDownTimer';

/**
 * @typedef {import("@prismicio/client").Content.CountdownSlice} CountdownSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CountdownSlice>} CountdownProps
 * @param {CountdownProps}
 */
const Countdown = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CountdownTimer title={slice.primary.title} targetDateTime={new Date(slice.primary.targetDate)} />
    </section>
  );
};

export default Countdown;
