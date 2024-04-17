import { ComponentPropsWithoutRef } from "react"

export const MentionIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 23.97 24"
      {...props}
    >
      <g fill="none">
        <path
          id="menu-path-star"
          fill="currentColor"
          d="M11.986 0A11.96 11.96 0 0 1 23.97 12c0 6.653-5.34 12-11.985 12C5.34 24 0 18.594 0 12 0 5.347 5.4 0 11.986 0zm.148 3.09l-2.13 6.356H3.324l5.381 3.92-2.07 6.357 5.5-3.98 5.381 3.98-2.07-6.357 5.44-3.98h-6.74L12.133 3.09z"
        ></path>
      </g>
    </svg>
  )
}
