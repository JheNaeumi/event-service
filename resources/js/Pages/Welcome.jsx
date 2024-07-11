// import { Link, Head } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document.getElementById('screenshot-container')?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document.getElementById('docs-card-content')?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="Welcome" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <img
//                     id="background"
//                     className="absolute -left-20 top-0 max-w-[877px]"
//                     src="https://laravel.com/assets/img/welcome/background.svg"
//                 />
//                 <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
//                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
//                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
//                             <div className="flex lg:justify-center lg:col-start-2">
//                                 <svg
//                                     className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
//                                     viewBox="0 0 62 65"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </div>
//                             <nav className="-mx-3 flex flex-1 justify-end">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('dashboard')}
//                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                     >
//                                         Dashboard
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Log in
//                                         </Link>
//                                         <Link
//                                             href={route('register')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Register
//                                         </Link>
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         <main className="mt-6">
//                             <div className="grid gap-6 lg:grid-cols-5 grid-cols-2 lg:gap-8">
//                                 <div className='hidden lg:flex col-span-1 px-6 justify-center'>
//                                     Home
//                                 </div>
//                                 <div className='flex-row lg:col-span-3'>
//                                     <div className='flex mb-5'>
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                                     </div>
//                                     <div className='flex mb-5'>
//                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                                     </div>
                                  
//                                 </div>
//                                 <div className='flex lg:col-span-1'>
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                                 </div>
//                             </div>
//                         </main>

//                         <footer className="py-16 text-center text-sm text-black dark:text-white/70">
//                             Laravel v{laravelVersion} (PHP v{phpVersion})
//                         </footer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <svg
                                    className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                    viewBox="0 0 62 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8013 14.4882 61.8212 14.5405C61.8311 14.5692 61.8473 14.5954 61.8548 14.6253Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M61.3887 29.4265C61.5364 29.3392 61.6675 29.2132 61.7554 29.0614C61.8434 28.9095 61.8898 28.737 61.8897 28.5615V42.2634C61.8897 42.3507 61.8773 42.4383 61.8553 42.522C61.8478 42.5517 61.8311 42.578 61.8211 42.6067C61.8011 42.659 61.7838 42.7126 61.7551 42.7612C61.7377 42.7936 61.7103 42.8198 61.6878 42.8497C61.6579 42.8896 61.633 42.9307 61.5981 42.9656C61.5694 42.9933 61.5333 43.0157 61.5021 43.0407C61.4647 43.0694 61.4323 43.1005 61.3899 43.1255L49.4118 50.022C49.2602 50.1094 49.0883 50.1553 48.9133 50.1553C48.7383 50.1553 48.5663 50.1094 48.4147 50.022L36.4341 43.1255C36.3942 43.1015 36.3618 43.0694 36.3244 43.0407C36.292 43.0157 36.2559 42.9933 36.2272 42.9656C36.1923 42.9307 36.1674 42.8896 36.1375 42.8497C36.1163 42.8198 36.0888 42.7936 36.0702 42.7612C36.0427 42.7126 36.0253 42.659 36.0053 42.6067C35.9954 42.578 35.9792 42.5517 35.9704 42.522C35.948 42.4383 35.9355 42.3507 35.9355 42.2634V29.1636C35.9355 29.0773 35.9479 28.9901 35.9704 28.9054C35.978 28.8766 35.9941 28.8505 36.0041 28.8217C36.024 28.7694 36.0414 28.7158 36.0689 28.6672C36.0876 28.6347 36.115 28.6086 36.1362 28.5787C36.1662 28.5388 36.1911 28.4977 36.226 28.4628C36.2557 28.4341 36.2918 28.4128 36.3242 28.3879C36.3617 28.358 36.3942 28.3256 36.4341 28.3018L48.4147 21.4053C48.5663 21.3179 48.7383 21.2719 48.9133 21.2719C49.0883 21.2719 49.2602 21.3179 49.4118 21.4053L61.3899 28.3018C61.4323 28.3269 61.4647 28.358 61.5021 28.3867C61.5333 28.4117 61.5694 28.4341 61.5981 28.4618C61.633 28.4977 61.6579 28.5388 61.6878 28.5787C61.7103 28.6086 61.7377 28.6347 61.7551 28.6672C61.7838 28.7158 61.8013 28.7694 61.8212 28.8217C61.8311 28.8505 61.8478 28.8766 61.8553 28.9064C61.8773 28.9901 61.8897 29.0773 61.8897 29.1636V29.4265Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-end gap-4">
                                {auth ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </header>

                        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:mb-0 lg:grid-cols-2">
                            <a
                                id="docs-card"
                                href="https://laravel.com/docs"
                                className="scale-100 p-6 bg-white/50 dark:bg-black/50 bg-opacity-60 dark:bg-opacity-60 shadow-2xl shadow-gray-500/20 dark:shadow-none rounded-[2rem] ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-250 hover:scale-[1.02] hover:shadow-none focus:scale-[1.02] focus:shadow-none focus:outline-none dark:focus:outline-none"
                            >
                                <div
                                    id="docs-card-content"
                                    className="h-full flex flex-col justify-between"
                                >
                                    <div className="h-full flex flex-col justify-between">
                                        <div className="relative flex items-center gap-4">
                                            <img
                                                src="https://laravel.com/img/logomark.min.svg"
                                                className="h-16 w-16"
                                                alt="Laravel"
                                            />
                                            <h2 className="font-display text-xl text-black/50 dark:text-white/50">
                                                Documentation
                                            </h2>
                                        </div>
                                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            Laravel has wonderful documentation
                                            covering every aspect of the
                                            framework. Whether you are new to
                                            the framework or have previous
                                            experience, we recommend reading
                                            all of the documentation from
                                            beginning to end.
                                        </p>
                                    </div>
                                    <div className="mt-6 text-sm font-medium text-black/50 dark:text-white/50">
                                        Explore the documentation →
                                    </div>
                                </div>
                            </a>

                            <a
                                id="screenshot-container"
                                href="https://laracasts.com"
                                className="scale-100 p-6 bg-white/50 dark:bg-black/50 bg-opacity-60 dark:bg-opacity-60 shadow-2xl shadow-gray-500/20 dark:shadow-none rounded-[2rem] ring-1 ring-gray-900/5 dark:ring-white/10 transition-all duration-250 hover:scale-[1.02] hover:shadow-none focus:scale-[1.02] focus:shadow-none focus:outline-none dark:focus:outline-none"
                            >
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <div className="relative flex items-center gap-4">
                                            <img
                                                src="https://laravel.com/img/logomark.min.svg"
                                                className="h-16 w-16"
                                                alt="Laravel"
                                            />
                                            <h2 className="font-display text-xl text-black/50 dark:text-white/50">
                                                Laracasts
                                            </h2>
                                        </div>
                                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            Laracasts offers thousands of
                                            video tutorials on Laravel, PHP,
                                            and JavaScript development. Check
                                            them out, see for yourself, and
                                            massively level up your development
                                            skills in the process.
                                        </p>
                                    </div>
                                    <div className="mt-6 text-sm font-medium text-black/50 dark:text-white/50">
                                        Start watching Laracasts →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



