import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgStatussent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 62"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#347AF0"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={4}
        d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30z"
        clipRule="evenodd"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M22.277 22.277a13.71 13.71 0 000 19.446 13.71 13.71 0 0019.446 0 13.71 13.71 0 000-19.446 13.71 13.71 0 00-19.446 0zm6.187 4.95c-.707 0-1.237.53-1.237 1.238 0 .707.53 1.237 1.237 1.237h4.066l-4.95 4.95c-.53.53-.53 1.237 0 1.767.53.53 1.238.53 1.768 0l4.95-4.95v4.066c0 .708.53 1.238 1.237 1.238.708 0 1.238-.53 1.238-1.238v-7.07c0-.177 0-.354-.088-.442 0-.177-.177-.354-.266-.442-.088-.089-.265-.266-.441-.266-.089-.088-.266-.088-.443-.088h-7.07zm11.49-3.182a11.203 11.203 0 00-15.909 0 11.203 11.203 0 000 15.91 11.203 11.203 0 0015.91 0 11.203 11.203 0 000-15.91z"
        clipRule="evenodd"
      />
      <Mask id="status_sent_svg__a" width={28} height={28} x={18} y={18} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M22.277 22.277a13.71 13.71 0 000 19.446 13.71 13.71 0 0019.446 0 13.71 13.71 0 000-19.446 13.71 13.71 0 00-19.446 0zm6.187 4.95c-.707 0-1.237.53-1.237 1.238 0 .707.53 1.237 1.237 1.237h4.066l-4.95 4.95c-.53.53-.53 1.237 0 1.767.53.53 1.238.53 1.768 0l4.95-4.95v4.066c0 .708.53 1.238 1.237 1.238.708 0 1.238-.53 1.238-1.238v-7.07c0-.177 0-.354-.088-.442 0-.177-.177-.354-.266-.442-.088-.089-.265-.266-.441-.266-.089-.088-.266-.088-.443-.088h-7.07zm11.49-3.182a11.203 11.203 0 00-15.909 0 11.203 11.203 0 000 15.91 11.203 11.203 0 0015.91 0 11.203 11.203 0 000-15.91z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#status_sent_svg__a)">
        <Path fill="#fff" d="M47 17H17v30h30z" />
      </G>
    </Svg>
  );
}

export default SvgStatussent;
