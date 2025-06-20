import React from "react";
// import { ArrowRight } from "lucide-react";

export default function FlutterLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-red-500">V</span>
            <span className="text-green-500">A</span>
            <span className="text-blue-500">F</span>
            <span className="text-yellow-500">U</span>
            <span className="text-purple-500">Z</span>
          </div>
        </div>
        <div className="text-lg text-gray-300">Securing Your Flutter App: Best Practices and Techniques</div>
        <button
          variant="outline"
          className="border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-6"
        >
          CONTACT US
        </button>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-48 bg-gray-900 border-r border-gray-800 p-6">
          <nav className="space-y-6">
            <div className="text-white hover:text-cyan-400 cursor-pointer">App Development</div>
            <div className="text-white hover:text-cyan-400 cursor-pointer">Challenges</div>
            <div className="text-white hover:text-cyan-400 cursor-pointer">Hire Developer</div>
            <div className="text-white hover:text-cyan-400 cursor-pointer">Community</div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 relative">
          <div className="grid grid-cols-2 min-h-screen">
            {/* Left Content */}
            <div className="p-12 flex flex-col justify-center">
              <h1 className="text-6xl font-bold leading-tight mb-6">
                Unlock the Potential
                <br />
                of Flutter
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your Premier Partner for Cross-Platform
                <br />
                App Excellence!
              </p>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-3 rounded-full w-fit">
                UPGRADE YOUR TECH
              </button>
            </div>

            {/* Right Content - Code Editor */}
            <div className="p-8 flex items-center justify-center">
              <div className="space-y-4">
                {/* First Code Window */}
                <div className="bg-gray-800 rounded-lg p-4 w-96 h-64 overflow-hidden">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <div>
                      <span className="text-blue-400">class</span>{" "}
                      <span className="text-yellow-300">MyApp</span>{" "}
                      <span className="text-blue-400">extends</span>{" "}
                      <span className="text-yellow-300">StatelessWidget</span> {"{"}
                    </div>
                    <div className="ml-4">
                      <span className="text-gray-500">// This widget is the root of your application.</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">@override</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">Widget</span>{" "}
                      <span className="text-blue-300">build</span>(
                      <span className="text-yellow-300">BuildContext</span>{" "}
                      <span className="text-white">context</span>) {"{"}
                    </div>
                    <div className="ml-8">
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-yellow-300">MaterialApp</span>(
                    </div>
                    <div className="ml-12">
                      <span className="text-green-400">title:</span>{" "}
                      <span className="text-orange-400">'Flutter Demo'</span>,
                    </div>
                    <div className="ml-12">
                      <span className="text-green-400">theme:</span>{" "}
                      <span className="text-yellow-300">ThemeData</span>(
                    </div>
                    <div className="ml-16">
                      <span className="text-gray-500">// This is the theme of your application.</span>
                    </div>
                    <div className="ml-16">
                      <span className="text-gray-500">// Try running your application with "flutter run".</span>
                    </div>
                  </div>
                </div>

                {/* Second Code Window */}
                <div className="bg-gray-800 rounded-lg p-4 w-96 h-48 overflow-hidden">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="font-mono text-sm space-y-1">
                    <div>
                      <span className="text-yellow-300">Center</span>(
                    </div>
                    <div className="ml-4">
                      <span className="text-green-400">child:</span>{" "}
                      <span className="text-yellow-300">ErrorCaseWidget</span>(
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">errorException:</span>{" "}
                      <span className="text-white">state.errorObject</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">onRetryCall:</span> () {"{"}
                    </div>
                    <div className="ml-12">
                      <span className="text-blue-300">loadDataOnRetry</span>(
                      <span className="text-white">context</span>);
                    </div>
                    <div className="ml-8">{"}"}</div>
                    <div className="ml-4">),</div>
                    <div>),</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 border-t border-gray-800">
            {/* Left - Image and Text */}
            <div className="p-12">
              <div className="mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Workspace with computers"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
              </p>
            </div>

            {/* Right - Flutter's Dawn */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-2">
                Flutter's
                <br />
                Dawn
              </h2>
              <p className="text-gray-400 text-lg mb-6">History of flutter</p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to
                global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges.
                Whether tech enthusiast or curious mind, join us on this captivating journey!{" "}
                <span className="text-cyan-400 cursor-pointer">Click to begin!</span>
              </p>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full w-fit flex items-center gap-2">
                BEGIN 
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}











// import React from "react";
// import { motion } from "framer-motion";

// export default function FlutterLanding() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex items-center justify-between p-6 border-b border-gray-800"
//       >
//         <div className="flex items-center">
//           <div className="text-2xl font-bold">
//             <span className="text-red-500">V</span>
//             <span className="text-green-500">A</span>
//             <span className="text-blue-500">F</span>
//             <span className="text-yellow-500">U</span>
//             <span className="text-purple-500">Z</span>
//           </div>
//         </div>
//         <div className="text-lg text-gray-300">Securing Your Flutter App: Best Practices and Techniques</div>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-6"
//         >
//           CONTACT US
//         </motion.button>
//       </motion.header>

//       <div className="flex">
//         {/* Left Sidebar */}
//         <motion.aside
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="w-48 bg-gray-900 border-r border-gray-800 p-6"
//         >
//           <nav className="space-y-6">
//             {["App Development", "Challenges", "Hire Developer", "Community"].map((item, index) => (
//               <motion.div
//                 key={item}
//                 whileHover={{ color: "#22d3ee", scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="text-white cursor-pointer"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </nav>
//         </motion.aside>

//         {/* Main Content */}
//         <main className="flex-1 relative">
//           <div className="grid grid-cols-2 min-h-screen">
//             {/* Left Content */}
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="p-12 flex flex-col justify-center"
//             >
//               <h1 className="text-6xl font-bold leading-tight mb-6">
//                 Unlock the Potential
//                 <br />
//                 of Flutter
//               </h1>
//               <p className="text-xl text-gray-300 mb-8">
//                 Your Premier Partner for Cross-Platform
//                 <br />
//                 App Excellence!
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-3 rounded-full w-fit"
//               >
//                 UPGRADE YOUR TECH
//               </motion.button>
//             </motion.div>

//             {/* Right Content - Code Editor */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="p-8 flex items-center justify-center"
//             >
//               <div className="space-y-4">
//                 <div className="bg-gray-800 rounded-lg p-4 w-96 h-64 overflow-hidden">
//                   <div className="flex items-center mb-3">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                   <div className="font-mono text-sm space-y-1">
//                     <div>
//                       <span className="text-blue-400">class</span>{" "}
//                       <span className="text-yellow-300">MyApp</span>{" "}
//                       <span className="text-blue-400">extends</span>{" "}
//                       <span className="text-yellow-300">StatelessWidget</span> {"{"}
//                     </div>
//                     <div className="ml-4 text-gray-500">// This widget is the root of your application.</div>
//                     <div className="ml-4 text-blue-400">@override</div>
//                     <div className="ml-4">
//                       <span className="text-yellow-300">Widget</span>{" "}
//                       <span className="text-blue-300">build</span>(
//                       <span className="text-yellow-300">BuildContext</span>{" "}
//                       <span className="text-white">context</span>) {"{"}
//                     </div>
//                     <div className="ml-8 text-blue-400">return <span className="text-yellow-300">MaterialApp</span>(</div>
//                     <div className="ml-12 text-green-400">title: <span className="text-orange-400">'Flutter Demo'</span>,</div>
//                     <div className="ml-12 text-green-400">theme: <span className="text-yellow-300">ThemeData</span>(</div>
//                     <div className="ml-16 text-gray-500">// This is the theme of your application.</div>
//                     <div className="ml-16 text-gray-500">// Try running your application with "flutter run".</div>
//                   </div>
//                 </div>

//                 {/* Second Code Window */}
//                 <div className="bg-gray-800 rounded-lg p-4 w-96 h-48 overflow-hidden">
//                   <div className="flex items-center mb-3">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                   <div className="font-mono text-sm space-y-1">
//                     <div><span className="text-yellow-300">Center</span>(</div>
//                     <div className="ml-4"><span className="text-green-400">child:</span> <span className="text-yellow-300">ErrorCaseWidget</span>(</div>
//                     <div className="ml-8"><span className="text-green-400">errorException:</span> <span className="text-white">state.errorObject</span>,</div>
//                     <div className="ml-8"><span className="text-green-400">onRetryCall:</span> () {"{"}</div>
//                     <div className="ml-12"><span className="text-blue-300">loadDataOnRetry</span>(<span className="text-white">context</span>);</div>
//                     <div className="ml-8">{"}"}</div>
//                     <div className="ml-4">),</div>
//                     <div>),</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Bottom Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-2 border-t border-gray-800"
//           >
//             {/* Left - Image and Text */}
//             <div className="p-12">
//               <div className="mb-6">
//                 <img
//                   src="/placeholder.svg"
//                   alt="Workspace with computers"
//                   width={300}
//                   height={200}
//                   className="rounded-lg"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
//               </p>
//             </div>

//             {/* Right - Flutter's Dawn */}
//             <div className="p-12 flex flex-col justify-center">
//               <h2 className="text-5xl font-bold mb-2">
//                 Flutter's
//                 <br />
//                 Dawn
//               </h2>
//               <p className="text-gray-400 text-lg mb-6">History of flutter</p>
//               <p className="text-gray-300 mb-8 leading-relaxed">
//                 Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' From humble origins to
//                 global acclaim, delve into its captivating narrative. Explore milestones, triumphs, and challenges.
//                 Whether tech enthusiast or curious mind, join us on this captivating journey!{" "}
//                 <span className="text-cyan-400 cursor-pointer">Click to begin!</span>
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full w-fit flex items-center gap-2"
//               >
//                 BEGIN
//               </motion.button>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }
