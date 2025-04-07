'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MapMenu() {
    const pathname = usePathname(); // Obter a rota atual

    // Verifica se a rota atual é '/info'
    const isInfoActive = pathname === "/";
    const isMapActive = pathname === "/map";

    return (
        <nav className="absolute bottom-0 bg-[#349C8F] p-5 py-5 rounded-t-xl flex gap-5 z-[100]">
            {/* Ícone com cor alterada quando a rota for '/info' */}
            <button >
                <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3941 15.8229V13.162C21.3939 12.6645 21.2548 12.1769 20.9926 11.754C20.7304 11.3312 20.3555 10.9899 19.9099 10.7685L14.7085 8.17448V6.16878H16.0456C16.781 6.16878 17.3827 5.56707 17.3827 4.83165C17.3827 4.09623 16.781 3.49452 16.0456 3.49452H14.7085V2.15738C14.7085 1.42196 14.1067 0.820251 13.3713 0.820251C12.6359 0.820251 12.0342 1.42196 12.0342 2.15738V3.49452H10.6971C9.96164 3.49452 9.35993 4.09623 9.35993 4.83165C9.35993 5.56707 9.96164 6.16878 10.6971 6.16878H12.0342V8.17448L6.83275 10.7819C6.3872 11.0033 6.01224 11.3446 5.75004 11.7674C5.48784 12.1902 5.34879 12.6778 5.34853 13.1754V15.8363L1.59119 17.5077C0.628452 17.9222 0 18.8849 0 19.9413V26.2258C0 27.6966 1.20342 28.9 2.67427 28.9H10.6971V25.0357C10.6971 23.6986 11.6063 22.4684 12.9167 22.2545C13.3006 22.1883 13.6943 22.2067 14.0704 22.3085C14.4464 22.4104 14.7956 22.5931 15.0936 22.844C15.3917 23.0949 15.6313 23.4079 15.7957 23.7611C15.9601 24.1142 16.0454 24.4991 16.0456 24.8886V28.9H24.0684C25.5392 28.9 26.7427 27.6966 26.7427 26.2258V19.9413C26.7427 18.8849 26.1142 17.9222 25.1515 17.4943L21.3941 15.8229ZM13.3713 17.5344C12.2615 17.5344 11.3656 16.6385 11.3656 15.5287C11.3656 14.4189 12.2615 13.523 13.3713 13.523C14.4811 13.523 15.377 14.4189 15.377 15.5287C15.377 16.6385 14.4811 17.5344 13.3713 17.5344Z" fill="#51448B" />
                </svg>
            </button>

            <button>
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.40909 12.1026L4.29773 12.2423C4.46845 10.7128 4.95733 9.23505 5.73347 7.9025C6.50961 6.56995 7.55612 5.41161 8.80682 4.50072L7.22864 2.09719C6.84818 1.42644 7.04545 0.574023 7.75 0.18275C8.45455 -0.194549 9.28591 0.0290357 9.68045 0.699789L10.9909 3.24306C12.4153 2.6356 13.9495 2.32232 15.5 2.32232C17.0505 2.32232 18.5847 2.6356 20.0091 3.24306L21.3195 0.699789C21.7141 0.0290357 22.5455 -0.194549 23.25 0.18275C23.9545 0.574023 24.1518 1.42644 23.7714 2.09719L22.1932 4.50072C23.4439 5.41161 24.4904 6.56995 25.2665 7.9025C26.0427 9.23505 26.5316 10.7128 26.7023 12.2423L29.5909 12.1026C29.9646 12.1026 30.323 12.2498 30.5873 12.5119C30.8515 12.774 31 13.1294 31 13.5C31 13.8706 30.8515 14.226 30.5873 14.4881C30.323 14.7502 29.9646 14.8974 29.5909 14.8974L26.7023 14.7577C26.5316 16.2872 26.0427 17.7649 25.2665 19.0975C24.4904 20.43 23.4439 21.5884 22.1932 22.4993L23.7714 24.9028C24.1518 25.5736 23.9545 26.426 23.25 26.8172C22.5455 27.1945 21.7141 26.971 21.3195 26.3002L20.0091 23.7569C18.5847 24.3644 17.0505 24.6777 15.5 24.6777C13.9495 24.6777 12.4153 24.3644 10.9909 23.7569L9.68045 26.3002C9.28591 26.971 8.45455 27.1945 7.75 26.8172C7.04545 26.426 6.84818 25.5736 7.22864 24.9028L8.80682 22.4993C7.55612 21.5884 6.50961 20.43 5.73347 19.0975C4.95733 17.7649 4.46845 16.2872 4.29773 14.7577L1.40909 14.8974C1.03538 14.8974 0.676969 14.7502 0.412713 14.4881C0.148457 14.226 0 13.8706 0 13.5C0 13.1294 0.148457 12.774 0.412713 12.5119C0.676969 12.2498 1.03538 12.1026 1.40909 12.1026ZM11.3714 12.5917C11.5545 11.7393 12.0195 10.9847 12.6818 10.4117L10.3427 6.86234C8.57565 8.20864 7.41599 10.1923 7.11591 12.3821L11.3714 12.5917ZM15.5 9.30779C15.9509 9.30779 16.3736 9.37766 16.7682 9.50343L18.7127 5.74441C17.7264 5.33917 16.6414 5.11558 15.5 5.11558C14.3586 5.11558 13.2736 5.33917 12.2873 5.74441L14.2318 9.50343C14.6264 9.37766 15.0491 9.30779 15.5 9.30779ZM19.6286 12.5917L23.8841 12.3821C23.584 10.1923 22.4243 8.20864 20.6573 6.86234L18.3182 10.4117C18.9805 10.9847 19.4455 11.7393 19.6286 12.5917ZM19.6286 14.4083C19.4455 15.2607 18.9805 16.0153 18.3182 16.5883L20.6573 20.1377C22.4243 18.7914 23.584 16.8077 23.8841 14.6179L19.6286 14.4083ZM15.5 17.6922C15.0491 17.6922 14.6264 17.6223 14.2177 17.4966L12.2873 21.2556C13.2736 21.6608 14.3586 21.8844 15.5 21.8844C16.6414 21.8844 17.7264 21.6608 18.7127 21.2556L16.7823 17.4966C16.3736 17.6223 15.9509 17.6922 15.5 17.6922ZM11.3714 14.4083L7.11591 14.6179C7.42591 16.8538 8.60955 18.8241 10.3427 20.1377L12.6818 16.5883C12.0195 16.0153 11.5545 15.2607 11.3714 14.4083Z" fill="#51448B" />
                </svg>
            </button>

        </nav>
    );
}
