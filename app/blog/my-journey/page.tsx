"use client";
import Image from "next/image";
export default function MyJourney() {
  return (
    <div className="flex flex-col p-2 md:p-4 items-center justify-center w-full h-full mb-96">
      <div className="w-full gap-2 flex-col flex max-w-screen-lg h-full">
        <h1 className="blog-heading">My Journey</h1>
        <p className="text-justify text-neutral-400">
          Hi, I am Vamshi Nenu, a.k.a Vamshi Krishna Karnayna. Let's first talk
          about "why not vamshikarnayana.com or any other domain name"?. Thank
          you for not asking this, but I am going to answer it. I am a
          programmer, I am designer, I am creative person. I am a lot of things,
          human too. But my creative instincts told me not to going with a big
          name, and also not to go with a non creative one. So I thought well
          there are a lot of I's in what I do, so why not vamshi nenu (means
          "I"). Its like saying <span className="italic">I am vamshi</span>, in
          telugu which is my mother tongue.
          <br />
          <br />
          Enough about the domain, I know you want to know about me. 09/20/2000
          is the day I started my journey. I began crying eating and sleeping
          for almost a couple first years of my carrer. Then 15 years later, I
          started last year of my{" "}
          <span className="italic text-neutral-600">
            schooling at Ravindra Bharathi School
          </span>
          . I was told, always told, that I am not going to be a successful
          person. Maybe because I question alot or maybe the definition of
          success they gave didn't align with my journey. They (almost everyone
          but, my mom and best friends) thought I was going to fail the class.
          but I didn't. Instead,{" "}
          <span className="italic text-neutral-600">I got 83%</span> . I was
          busy reading textbooks, googling, about Benzene, Friction, Gravity,
          and Numbers.
          <br />
          <br />
          Then the next two years{" "}
          <span className="italic text-neutral-600">2015-2017</span>, I was at{" "}
          <span className="text-neutral-600 italic">
            Gitam Junior College for high school
          </span>
          . I was overwhelemed with thoughts of what I could achieve with just
          numbers, integrals, trigonometry. Made me a mad man, I was so happy,
          to just solve the entire textbook, like I was binge watching netflix,
          to be specific Stranger Things. I was so busy doing all the maths I
          was barely good enough at physics and chemicals. I was sad, for the
          first time, not because I barely passed the language sanskrit. But I
          got 3 points less in Maths. But Math really helped me balance out my
          grades. <span className="italic text-neutral-600">I got 83%</span>{" "}
          again!. I am not lying, Yes I did get 83%. But dont worry, bachelors,
          is going to be worse. I promise.
          <br />
          <br />
          <span className="font-bold">4 years of chaos...</span>
          <br />
          <br />I was so confused on what to do next. Electrical Engineering?,
          Civil Engineering?, I mean, all the engineering courses had some sort
          of numbers involved. But oh boy, computer science got into my mind.
          Felt like magic, you write some text, and run it, and the only
          limitation was your mind?.{" "}
          <span className="italic text-neutral-600">2017-2021</span> I started
          my
          <span className="text-neutral-600 italic">
            {" "}
            bachelors in COMPUTER SCIENCE!!!!! at ACE Engineering College
          </span>
          . you can relate it to the day when you first encountered code. I was
          excited. 1st year 1st semester. I was happy to be there, to learn how
          things work in computer realm. But I was so confused, they started to
          teach me, chemistry, physics, If they didn't include math, I would've
          lost my mind. I failed 3/5 courses. But hey I got good grades in math.
          Here comes 1st year 2nd semester. God damn it, This time It was
          Engneering drawing? and more Physics? but hey they had 2 math courses,
          one was about calculus but complicated, and the other was about
          complex probability problems mwaaaaaah. I passed both. But not the
          other courses. I was called in by the head of the department, about my
          progress. He said, I am not good enough. I need to work harder. I
          didnot care about what they were saying. I just noded and said, "yes
          sir". I did not care about the grades. I never did. I guess they were
          able to see that in my face, and they escalated this issue to my mom.
          dont worry, I got the chillest mom ever. she knew I was smart, she
          knew I was failing all these courses, but never said anything. In 2nd
          Year 1st semester. I took things into my hands, and started skipping
          classes. not to do something fun. Just to go to the library, and read
          the holy grail C programming book. This semseter did not have any
          computer science related courses. I looked up and it would start the
          next semester. I was doing programs, like writing my own function to
          find the square root of a number not just ^ 0.5. but acutally
          dividing. I was soo good at this. Next semester, I had nothing to do,
          because I had all the courses releated to computer science, and I've
          read all of them. So it was time for me to pass the courses that I
          failed. and I did. except for (physics). 2nd year 2nd semester, the
          semester, where I did neither failed any courses nor got good grades,
          even though I had all the courses releated to computer science. My
          answers/ code, was always creative, I always used to show my cool
          tricks in coding, I guess they wanted a generic answer that was in
          textbooks. 2nd year 2nd semester, is when I encountered music. It has
          numbers too, it was all about balance and creativity. So{" "}
          <span className="text-neutral-600 italic">
            I made some music
          </span>{" "}
          under the name{" "}
          <button
            onClick={() => {
              window.open("https://soundcloud.com/vaanalen", "_blank");
            }}
            className="underline"
          >
            vaanalen
          </button>
          . I was getting good at coding, and I was getting good at music. And
          here comes COVID,{" "}
          <span className="text-neutral-600 italic">
            {" "}
            I learned Flutter, python, javascript, and some HTML, CSS, SQL and
            mongodb.
          </span>{" "}
          By using these I built a app called{" "}
          <span className="textn-neutral-600 italic">puppet</span>, an
          application, that would go through all your pdfs and lets you search
          by text and it would send you the right page on a pdf. I am creative,
          Hey I am not bragging it, but I am let it be creating presentations,
          or creating app's that are useful and usable. I've submitted this as
          my minor project, and I blew everyone's minds, with my presentation,
          and my app, and the fact that I was the only one on the team, and the
          app really worked unlike other submissions.
          <br />
          June 2021, The time of my bachelors, where I needed to do a project,
          this is when I started my idea of creating a learning management
          system, I was soo locked in. But as usual, everyone was not impressed
          with my idea. They wanted to see some AI, Machine Learning projects.
          So me and my team, did a project that predict future house prices
          based on the location, they were impressed but I was not. Why?.
          Because, there was not much coding, we just needed a dataset, and we
          need to train them. tada, thats it, I dont understand how AI was just
          a hype, atleast the project that I did, and my classmates did.
          <br />
          Aug 2021 - Dec 2021, I worked on the courses that I failed, which
          included, physics, and other courses, that weren't even related to
          computers!. But I did it. I passed all of them. And parallelly, I
          worked on getting my admission for Masters in the USA,
        </p>
        <div className="flex flex-row gap-2 justify-center w-full items-center">
          <Image
            height={40}
            width={40}
            src={"/vamshinenu.png"}
            alt="vamshinenu"
            className="rounded-full"
          />
          <div className="text-xs flex flex-col text-neutral-600">
            <p>Vamshi Nenu</p>
            <div className="flex flex-row w-full items-center">355 views</div>
          </div>
        </div>
      </div>
    </div>
  );
}
