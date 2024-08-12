import { SvgIcon } from "@mui/material"

interface IHoverClassName {
    className: string
    color?: string
}

export default function CardTwoIconStar({ className }: IHoverClassName, { color = "#C7B2FF" }) {
    return (
        <SvgIcon>
            <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.278 23.993C13.07 23.993 12.927 23.86 12.852 23.6C12.63 22.827 12.43 22.047 12.183 21.283C11.888 20.279 11.3414 19.3671 10.5949 18.6338C9.8485 17.9005 8.92703 17.3701 7.918 17.093C7.181 16.867 6.435 16.668 5.694 16.456C5.58972 16.4436 5.49362 16.3934 5.42389 16.3149C5.35416 16.2364 5.31564 16.135 5.31564 16.03C5.31564 15.925 5.35416 15.8236 5.42389 15.7451C5.49362 15.6666 5.58972 15.6164 5.694 15.604C6.573 15.349 7.47 15.145 8.326 14.829C9.28368 14.4961 10.1439 13.931 10.8297 13.1843C11.5156 12.4376 12.0056 11.5325 12.256 10.55C12.456 9.859 12.651 9.167 12.849 8.476C12.8664 8.37384 12.9196 8.28117 12.9989 8.21447C13.0782 8.14778 13.1786 8.11138 13.2823 8.11174C13.3859 8.11209 13.4861 8.1492 13.5649 8.21644C13.6438 8.28368 13.6963 8.37672 13.713 8.479C13.92 9.202 14.113 9.928 14.337 10.646C14.6256 11.6975 15.187 12.6541 15.9642 13.4188C16.7415 14.1836 17.707 14.7294 18.763 15.001C19.463 15.201 20.163 15.401 20.855 15.601C21.118 15.677 21.246 15.818 21.248 16.027C21.25 16.236 21.12 16.383 20.862 16.458C20.052 16.692 19.231 16.893 18.434 17.163C17.4357 17.4751 16.5335 18.0364 15.8125 18.794C15.0914 19.5517 14.5753 20.4805 14.313 21.493C14.107 22.193 13.913 22.901 13.713 23.605C13.64 23.861 13.49 23.993 13.282 23.992"
                    fill={color} />
                <path d="M5.312 10.599C5.173 10.599 5.078 10.51 5.028 10.337C4.88 9.827 4.746 9.307 4.581 8.799C4.3847 8.12868 4.02042 7.51962 3.52269 7.02959C3.02496 6.53957 2.4103 6.18482 1.737 5.999C1.246 5.849 0.748999 5.716 0.253999 5.575C0.184483 5.56673 0.120413 5.53326 0.0739255 5.48092C0.0274381 5.42858 0.00176239 5.361 0.00176239 5.291C0.00176239 5.22099 0.0274381 5.15342 0.0739255 5.10108C0.120413 5.04874 0.184483 5.01526 0.253999 5.007C0.839999 4.837 1.438 4.701 2.009 4.49C2.64758 4.2679 3.22114 3.89095 3.67836 3.3929C4.13558 2.89484 4.4622 2.2912 4.629 1.636C4.762 1.175 4.892 0.713998 5.029 0.252998C5.03825 0.182766 5.07271 0.118291 5.12598 0.0715844C5.17924 0.0248783 5.24766 -0.000873566 5.3185 -0.000873566C5.38934 -0.000873566 5.45776 0.0248783 5.51102 0.0715844C5.56428 0.118291 5.59875 0.182766 5.608 0.252998C5.746 0.734998 5.877 1.219 6.024 1.698C6.21703 2.39822 6.59144 3.0351 7.10941 3.5443C7.62739 4.05349 8.27057 4.41697 8.974 4.598C9.438 4.735 9.904 4.863 10.374 4.998C10.55 5.048 10.635 5.143 10.636 5.282C10.637 5.421 10.551 5.519 10.378 5.569C9.838 5.725 9.29 5.859 8.759 6.039C8.08986 6.24614 7.48496 6.62126 7.00197 7.12858C6.51898 7.6359 6.17403 8.2585 6 8.937C5.863 9.406 5.733 9.876 5.6 10.346C5.551 10.516 5.451 10.605 5.313 10.604"
                    fill={color} />
            </svg>
        </SvgIcon>
    )
}