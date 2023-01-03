import Head from "next/head";
import Image from "next/image";
import img1 from "../images/illustration-woman-online-mobile.svg";
import img2 from "../images/illustration-woman-online-desktop.svg";
import box from "../images/illustration-box-desktop.svg";
import sha1 from "../images/bg-pattern-mobile.svg";
import sha2 from "../images/bg-pattern-desktop.svg";
import arrow from "../images/icon-arrow-down.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [oldActive, setOldActive] = useState(0);
  
  useEffect(() => {
    const buttons = document
      .querySelector("section")
      .querySelectorAll("header");
    const questions = document.querySelectorAll("h2");
    const answers = document.querySelectorAll("p");

    buttons.forEach((el, i) => {
      el.addEventListener("click", () => {
        questions[oldActive].style.fontWeight = "Normal";
        answers[oldActive].style.display = "none";

        setOldActive(i);
        questions[i].style.fontWeight = "Bold";
        answers[i].style.display = "block";
        answers[i].style.position = "relative";
        answers[i].style.transform = "none";
      });
    });
    return;
  }, [oldActive]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | FAQ Accordion Card</title>
      </Head>
      <main className=" bg-[white] 
                      || text-xs text-center font-body 
                      || m-4 max-w-5xl min-w-fit rounded-2xl p-4 pt-8 pb-10
                      || flex sm:flex-col justify-center items-center gap-2
                      || flex-row">
        <header className="relative">
          <Image
            alt="Woman with a blackboard"
            src={img1}
            className="sm:absolute sm:scale-100 sm:top-[-8.5rem] md:absolute md:scale-0 md:top-0"
          />
          <Image
            alt="Woman with a blackboard"
            src={img2}
            className="absolute sm:scale-0 sm:top-[-8.5rem] md:scale-75"
          />
          <Image
            alt="Shadow of the picture"
            src={sha1}
            className="sm:relative sm:scale-100 sm:-top-8 md:absolute md:scale-0 md:top-0"
          />
          <Image
            alt="Shadow of the picture"
            src={sha2}
            className="sm:absolute sm:scale-0 sm:-top-8 md:relative md:scale-75 md:bottom-28 md:right-8"
          />
          <Image
            alt="Shadow of the picture"
            src={box}
            className="sm:absolute sm:scale-0 md:absolute md:scale-50 top-32 left-4"
          />
        </header>
        <section className="max-w-[15rem] flex flex-col gap-2 text-darkGrayishBlue text-left">
          <h1 className="text-2xl text-center font-bold text-veryDarkDesaturatedBlue">
            FAQ
          </h1>
          <article className="relative">
            <header className="flex flex-row gap-4 justify-between text-veryDarkGrayishBlue  hover:text-softRed hover:cursor-pointer">
              <h2>How many team members can I invite?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="absolute scale-0 w-fit">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </article>
          <hr className=" text-lightGrayishBlue" />
          <article>
            <header className="flex flex-row gap-4 justify-between text-veryDarkGrayishBlue  hover:text-softRed hover:cursor-pointer">
              <h2>What is the maximum file upload size?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="absolute scale-0">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </article>
          <hr className=" text-lightGrayishBlue" />
          <article>
            <header className="flex flex-row gap-4 justify-between text-veryDarkGrayishBlue  hover:text-softRed hover:cursor-pointer">
              <h2>How do I reset my password?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="absolute scale-0">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </article>
          <hr className=" text-lightGrayishBlue" />
          <article>
            <header className="flex flex-row gap-4 justify-between text-veryDarkGrayishBlue  hover:text-softRed hover:cursor-pointer">
              <h2>Can I cancel my subscription?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="absolute scale-0">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </article>
          <hr className=" text-lightGrayishBlue" />
          <article>
            <header className="flex flex-row gap-4 justify-between text-veryDarkGrayishBlue  hover:text-softRed hover:cursor-pointer">
              <h2>Do you provide additional support?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="absolute scale-0">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
