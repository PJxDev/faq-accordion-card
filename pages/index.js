import Head from "next/head";
import Image from "next/image";
import img1 from "../images/illustration-woman-online-mobile.svg";
import sha1 from "../images/bg-pattern-mobile.svg";

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
      <main className="text-xs || font-body || bg-lightGrayishBlue || rounded-lg || flex || flex-col || items-center || justify-center || || w-[80%]">
        <header className="relative">
          <Image alt="Woman with a blackboard" src={img1} />
          <Image
            alt="Shadow of the picture"
            src={sha1}
            className="relative || bottom-16"
          />
          <h1 className="text-2xl || font-bold">FAQ</h1>
        </header>
        <section>
          <article>
            <header>
              <h2>How many team members can I invite?</h2>
              <button>a</button>
            </header>
            <p>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </article>
          <article>
            <header>
              <h2>What is the maximum file upload size?</h2>
              <button>a</button>
            </header>
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </article>
          <article>
            <header>
              <h2>How do I reset my password?</h2>
              <button>a</button>
            </header>
            <p>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </article>
          <article>
            <header>
              <h2>Can I cancel my subscription?</h2>
              <button>a</button>
            </header>
            <p>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </article>
          <article>
            <header>
              <h2>Do you provide additional support?</h2>
              <button>a</button>
            </header>
            <p>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
