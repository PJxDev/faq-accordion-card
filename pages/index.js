import Head from "next/head";
import Image from "next/image";
import img1 from "../images/illustration-woman-online-mobile.svg";
import sha1 from "../images/bg-pattern-mobile.svg";
import arrow from "../images/icon-arrow-down.svg";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | FAQ Accordion Card</title>
      </Head>
      <main className="bg-lightGrayishBlue || text-xs text-center font-body || w-[80%] rounded-lg p-4 || flex flex-col justify-center items-center">
        <header className="relative pt-16">
          <Image
            alt="Woman with a blackboard"
            src={img1}
            className="absolute -top-12 scale-[300%]"
          />
          <Image
            alt="Shadow of the picture"
            src={sha1}
            className="absolute top-2 scale-[300%]"
          />
          <h1 className="text-2xl || font-bold">FAQ</h1>
        </header>
        <section className="flex flex-col gap-2">
          <article>
            <header className="flex flex-row justify-between">
              <h2>How many team members can I invite?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>
            </header>
            <p className="scale-0 absolute">
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
          </article>
          <hr />
          <article>
            <header className="flex flex-row justify-between">
              <h2>What is the maximum file upload size?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>{" "}
            </header>
            {/* <p>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p> */}
          </article>
          <hr />
          <article>
            <header className="flex flex-row justify-between">
              <h2>How do I reset my password?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>{" "}
            </header>
            {/* <p>
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p> */}
          </article>
          <hr />
          <article>
            <header className="flex flex-row justify-between">
              <h2>Can I cancel my subscription?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>{" "}
            </header>
            {/* <p>
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p> */}
          </article>
          <hr />
          <article>
            <header className="flex flex-row justify-between">
              <h2>Do you provide additional support?</h2>
              <button>
                <Image alt="arrow" src={arrow} />
              </button>{" "}
            </header>
            {/* <p>
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p> */}
          </article>
        </section>
      </main>
    </>
  );
}
