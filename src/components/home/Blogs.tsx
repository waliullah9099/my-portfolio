import { TService } from "@/types";
import Image from "next/image";

const Blogs = async () => {
  return (
    <div
      id="services"
      className="bg-[rgba(4,33,60,0.9)] py-16 border-slate-600 border-b"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-center text-white font-bold text-4xl mb-3 snap-center">
          MY <span className="text-primary">Blogs</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="https://daveceddia.com/images/useEffect-hook.png"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              How does work useeffect in react?
            </h1>
            <p className="text-lg text-secondary">
              We declare the count state variable, and then we tell React we
              need to use an effect. We pass a function to the useEffect Hook.
              This function we pass is our effect. Inside our effect, we set the
              document title using the document.title browser API.{" "}
              <button className="bg-slate-600 px-3 py-[5px]">Read More</button>
            </p>
          </div>
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="https://waliullah99.netlify.app/assets/image-yBa2X2Yo.png"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              how does async function work?
            </h1>
            <p className="text-lg text-secondary">
              An async function declaration creates an AsyncFunction object.
              Each time when an async function is called, it returns a new
              Promise which will be resolved with the value returned by the
              async function, or rejected with an exception uncaught within the
              async function.
            </p>
          </div>
          <div className="group flex items-center justify-center flex-col bg-[#334155] py-5 px-6 rounded hover:-translate-y-4 transition-all duration-500 delay-75 hover:shadow-xl border border-slate-900">
            <Image
              className="w-[320px] h-[270px] rounded shadow-lg group-hover:scale-95 group-hover:shadow-xl transition-all duration-500 delay-75 "
              src="kl"
              height={300}
              width={300}
              alt="service"
            />
            <h1 className="text-2xl font-bold pt-6 pb-3 text-white">
              Web Development
            </h1>
            <p className="text-lg text-secondary">
              I specialize in delivering exceptional custom website development
              the MERN stack services tailored to your unique business needs.
              Trust me to transform your vision into a fully functional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
