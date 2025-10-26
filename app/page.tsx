import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Available from "./components/Available";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-grid-squares">
      <div className="flex justify-center mb-[5vh]">
        <div className="flex flex-col items-center justify-center h-fit max-w-100 min-w-75 w-[40vw] mt-[15vh] bg-[#2F2F37] outline-2 outline-[#383842] rounded-md shadow-2xl p-5">
          <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-[#4B4B58]">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <p className="font-bold">Selmeczi Attila</p>
          <p className="text-[#9ca3af] font-semibold">Software Engineer</p>

          <p className="text-center text-[#9ca3af] mt-2 px-1">
            A software engineer who builds{" "}
            <span className=" text-white underline decoration-dashed">
              efficient
            </span>{" "}
            and{" "}
            <span className=" text-white underline decoration-dashed">
              reliable
            </span>{" "}
            applications.
          </p>

          <Available isAvailable={true} />

          <div className="space-x-3">
            <a href="https://github.com/selmeczi-attila" target="_blank">
              <FontAwesomeIcon
                className="mt-4 cursor-pointer"
                icon={faGithub}
                size="2x"
              />
            </a>
            <a href="mailto:s.attila.dev@gmail.com" target="_blank">
              <FontAwesomeIcon
                className="mt-4 cursor-pointer"
                icon={faEnvelope}
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="flex justify-center mb-50">
        <div className="flex flex-col items-center justify-center h-fit max-w-100 min-w-75 w-[40vw] mt-[5vh] bg-[#2F2F37] outline-2 outline-[#383842] rounded-md shadow-2xl p-5">
          <p className="font-bold">CleanCo</p>

          <p className="text-center text-[#9ca3af] mt-3 px-1">
            A responsive website offering car and carpet cleaning services.{" "}
            <br></br>
            Collab project with my friend.
          </p>
          <div className="space-x-3">
            <a
              href="https://github.com/Geher-Marcell/carpet_cleaning"
              target="_blank"
            >
              <FontAwesomeIcon
                className="mt-4 cursor-pointer"
                icon={faGithub}
                size="2x"
              />
            </a>
            <a href="https://carpet-cleaning-dun.vercel.app/" target="_blank">
              <FontAwesomeIcon
                className="mt-4 cursor-pointer"
                icon={faGlobe}
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
