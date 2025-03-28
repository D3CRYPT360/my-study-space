
import React from 'react';

// FAQ data structure
export type FAQCategory = {
    title: string;
    questions: {
      question: string;
      answer: string | React.ReactNode;
    }[];
  };
  
export const faqData: FAQCategory[] = [
    {
      title: "General FAQs",
      questions: [
        {
          question: "How does My Study Space work?",
          answer: <>
            At My Study Space, we bring the classroom to your home. Our platform offers an online learning experience that mirrors a traditional school setting, where students interact with their teachers in real-time, just like they would in a physical classroom. <br/> The difference? It's more convenient, time-saving, engaging, interactive, and affordable. <br/><br/> With My Study Space, students can attend live classes, access lesson materials, complete assignments, and watch recorded lessons—whenever they need. Learning doesn't stop when the class is over. Our platform ensures that your child can revisit past lessons and continue their academic growth at their own pace, all while enjoying the flexibility and comfort of online learning.
          </>
        },
        {
          question: "Why choose Online Tuition?",
          answer: <>
            <b>Recorded Classes for Revision</b>
            <br/>
            Missed a class? No worries! Most online tuition sessions are recorded, allowing students to revisit lessons anytime for better understanding and revision.
            <br/>
            <br/>
            <b>Learn from Anywhere</b>
            <br/>
            All you need is an internet connection! Attend classes from the comfort of your home without the hassle of traveling.
            <br/>
            <br/>
            <b>Affordable & Cost-Effective</b>
            <br/>
            Online tuition is often more budget-friendly than physical classes and helps save on transportation costs.
            <br/>
            <br/>
            <b>Fun & Interactive Learning</b>
            <br/>
            Engage with tutors through exciting tools like Desmos, PHET, Virtual Labs, and quiz applications for a more dynamic learning experience.
            <br/>
            <br/>
            Online tuition offers flexibility, affordability, and interactive learning—all from the comfort of your home. Upgrade your study experience today!
          </>
        },
        {
            question: "Which platform do you use for classes?",
            answer: <>
              We have developed our <b>own learning platform</b> where students can join live lessons, watch previous recordings, access study materials, and manage their tuition payments—all in one place.
            </>
        },
        {
            question: "What devices can I use to join classes?",
            answer: <>
              At the moment, our platform is best suited for <b>laptops, desktops, and tablets</b>. Mobile device support will be available soon.
            </>
        }
      ]
    },
    {
      title: "Registration FAQs",
      questions: [
        {
          question: "How do I register?",
          answer: <>
          Registering for My Study Space is simple! Just create an account on our platform, similar to signing up for social media apps such as Instagram. You can create your account via the <a href="https://app.mystudyspace.mv/register" target="_blank" className="text-blue-600 hover:underline">Registration Portal</a>.
          <br/>
          <br/>
          To have the best experience, we recommend using a <b>laptop, desktop, or tablet</b> since our platform does not currently support mobile devices. When signing up, please use a <b>valid student or parent email</b>, as this will be required if you ever need to reset your password.
          <br/>
          <br/>
        Once your account is created and payment is made for the subjects you have selected, you will need to wait for us to verify your account. This process usually takes less than an hour, so be sure to check back within that time. Once your account is verified, you will have full access to classes, lesson recordings, and study materials etc.
          <br/>
          <br/>
        If you need any help during the registration process, feel free to message us on <b>telegram</b> by clicking <a href="https://t.me/mystudyspacemv" target="_blank" className="text-blue-600 hover:underline">here</a> or give us a call at <b>7572910</b>. We're happy to assist you!
          </>
        },
        
      ]
    },
    {
      title: "Fee FAQs",
      questions: [
        {
          question: "What are the fees?",
          answer: <>
            For <b>Grades 9 & 10</b>, the monthly fee per subject is <b>MVR 299</b>.
          </>
        },
        {
          question: "How do I pay the monthly fee?",
          answer: <>
            Paying your monthly fee is quick and easy. You can make the payment through your My Study Space account anytime between the <b>1st and 7th of the month</b>.
            <br/>
            <br/>
            After making the payment, don't forget to <b>upload the transfer slip</b> to your account. This step is necessary for us to verify your payment. To ensure smooth processing, please note that we are unable to accept payment slips sent through Viber, Telegram, Instagram, Messenger, or any other app. Payments can only be processed once the slip is uploaded from your My Study Space account.

          </>
        },
        {
          question: "When do I need to pay the monthly fee?",
          answer: <>
            Your monthly fee should be paid between the <b>1st and 7th of each month</b> through your My Study Space account.
            <br/>
            <br/>
            If payment is not made by the <b>7th</b>, your account will be temporarily suspended on the <b>8th</b>. If your payment slip is rejected due to incorrect details, please correct and re-upload it before or on the <b>7th</b> to avoid any disruptions to your classes.
          </>
        },
        {
          question: "If I register in the middle of the month, do I have to pay the full fee?",
          answer: <>
           Not at all! If you join on or after the <b>16th of the month</b>, you will only need to pay <b>70% of the full fee</b> for that month. The following month, you will be required to pay the full amount as usual
          </>
        },
        {
          question: "Do you offer a package for all subjects?",
          answer: <>
            Currently, we do not offer a package for all subjects. Students can select and pay for the subjects they wish to take individually.
          </>
        }
      ]
    },
    {
      title: "Class & Lesson FAQs",
      questions: [
        {
          question: "How do I join a class?",
          answer: <>
            Joining a class is simple. Just log in to your My Study Space account using the email and password you registered with. When it's time for your class, a <b>red "Join" button</b> will appear at the top in the relevant subject. If you don't see the button, simply refresh the page.
            <br/>
            <br/>
            To avoid any last-minute issues, please make sure you have <b>Zoom installed</b> before your class begins.
            We use Zoom application to conduct live session. You can download zoom at <a href="https://zoom.us/download" className="text-blue-600 hover:underline">zoom.us/download</a> or from app stores on tablets.
          </>
        },
        {
          question: "How do I add more classes?",
          answer: <>
          If you'd like to take additional subjects, you can easily add them from your account. Simply go to the <b>"Classes"</b> section, where you'll find a button in the <b>top-right corner "Enroll in more classes"</b> that allows you to add more subjects.
            <br/>
            <br/>
            Once you've selected your subjects, proceed with the payment, and you'll be all set to continue learning. Just make sure to double-check your subject choices before making the payment.

          </>
        },
        {
          question: "Which syllabus do you follow?",
          answer: "We follow the syllabus provided by the Ministry of Education, which is the same curriculum used in government schools."
        },
        {
          question: "How many students are in a class?",
          answer: <>
          Our classes do not have a set student limit. While this may seem different from traditional tuition, we believe that a larger class size creates a <b>strong sense of community and allows students to learn from each other</b>. The diverse perspectives make the <b>learning experience more engaging and interactive</b>.
          </>
        },
        {
          question: "Will teachers help with school homework?",
          answer: <>
          Since our students come from different schools with varying curriculums, our teachers are unable to provide assistance with school homework during class time.
          </>
        },
        {
          question: "Will teachers mark the given worksheets?",
          answer: <>
          Worksheets are not marked individually, but teachers go through the answers in class to ensure that students understand the concepts.
          </>
        },
        {
          question: "Can I speak privately with the teachers?",
          answer: <>
          Due to the large number of students we cater to, our teachers are unable to have one-on-one conversations with students outside of class. However students can ask questions in live sessions.
          </>
        },
        {
          question: "Can I get the teachers' contact numbers?",
          answer: <>
          To respect the privacy of our teachers, we do not share their personal contact details.
          </>
        },
        {
          question: "Can teachers give extra attention to students who are shy or struggling?",
          answer: <>
          Since all our classes are conducted in groups, individual attention may not be possible during live sessions. 
          </>
        },
        {
          question: "Can students ask questions during class?",
          answer: <>
          Of course! Students are encouraged to ask questions during lessons. They can either use the <b>"Raise Hand"</b> feature in Zoom to unmute and ask their question or type it in the <b>chat</b> for the teacher to respond.
          </>
        },
        {
          question: "Do you offer physical/face-to-face tuition?",
          answer: <>
          At the moment, My Study Space is an online-only tuition platform, offering classes for <b>Grade 9 & 10 students</b>.
          </>
        },
        {
          question: "Do you offer private tuition?",
          answer: <>
          No, we currently do not provide private tuition services. All our classes are <b>group class-based</b>.
          </>
        },
        {
          question: "Where can I find the timetable?",
          answer: <>
          You can view and download the latest class timetable <a href="/timetable" className="text-blue-600 hover:underline">here</a>.
          </>
        },
        {
          question: "Will the timetable change?",
          answer: <>
          Our timetable is carefully planned based on teacher availability and to prevent clashes with other classes. For this reason, we are unable to make changes. However, if you ever miss a class, you can always catch up using the <b>recorded lessons</b>.
          </>
        },
        {
          question: "What if I miss a live lesson?",
          answer: <>
          There's no need to worry! All our live lessons are recorded so that students can revisit them at any time. Each recording also includes a <b>short lesson summary</b>, making it easier to find specific topics without watching the entire session.
          </>
        }
      ]
    },
    {
      title: "Guides & Tutorials",
      questions: [
        {
          question: "How to Register for Tuition",
          answer: <>
          
          Getting started with My Study Space is quick and easy! Simply create an account, just like you would for social media. You can do this by clicking <a href="https://app.mystudyspace.mv/register" className="text-blue-600 hover:underline">here</a>.
          <br/>
          <br/>
For the best experience, we recommend using a <b>laptop, desktop, or tablet</b>, as our platform does not currently support mobile devices.
          <br/>
          <br/>
            When registering, please use a <b>student or parent email address</b> and make sure it's a valid one! If you ever forget your password, the reset link will be sent to this email.
            <br/>
            <br/>
            Once your account is created and payment is made for the subjects you've chosen, we will <b>verify your account</b> within an hour. Be sure to <b>log in and check back</b> during this time. After verification, you'll have full access to live classes, lesson recordings, and other learning materials.
            <br/>
            <br/>
            If you need any help, feel free to reach out to us on <b>Telegram</b> by clicking <a href="https://t.me/mystudyspacemv" className="text-blue-600 hover:underline">here</a> or give us a call at <b>7572910</b>.

          
          </>
        },
        {
          question: "How to Join Classes",
          answer: <>
          Joining your classes is simple! Just log in to your <b>My Study Space</b> account using the email and password you registered with.
          <br/>
          <br/>
          Once logged in, you'll see your <b>class schedule</b> on your dashboard. When it's time for your lesson, a <b>"Join" button</b> will appear at the top of the relevant subject. This button will turn <b>red</b> once the teacher has started the class.
          <br/>
          <br/>
          If the button doesn't change color, simply <b>refresh the page</b> and try again.
          </>
        },
        {
          question: "How to Pay Fees",
          answer: <>
          Monthly tuition fees can be paid directly through your <b>My Study Space</b> account between the <b>1st and 7th of each month</b>.
          <br/>
          <br/>
          Once you've made the payment, don't forget to <b>upload the transfer slip</b> to your account. This step is essential, as payments cannot be processed without the slip.
          <br/>
          <br/>
          Please note that we <b>do not accept</b> payment slips sent via <b>Viber, Telegram, Instagram, Messenger, or any other app</b>. Payments are only processed once the slip is uploaded through your My Study Space account.
          <br/>
          <br/>
          To avoid account suspension on the <b>8th</b>, please ensure your payment slip is uploaded before the deadline.

          </>
        },
        {
          question: "How to Watch Lesson Recordings",
          answer: <>
          Missed a class? No problem! You can find all lesson recordings in your <b>My Study Space</b> account.
          <br/>
          <br/>
          Simply navigate to your classes, select the relevant subject, and scroll down—you'll see all the recordings neatly listed.
          <br/>
          <br/>
          Each recording includes a <b>short lesson summary</b> written by the teacher, so you can quickly find the exact part of the lesson you need to review. This makes revision easier and helps new students catch up without having to watch entire lessons.

          </>
        },
        {
          question: "How to Add Subjects",
          answer: <>
          Need to take on more subjects? It's easy!
          <br/>
          <br/>
          Head over to the <b>"Classes"</b> section in your My Study Space account. In the <b>top-right corner</b>, you'll see an option to <b>add subjects</b>.
          <br/>
          <br/>
          Once you've selected your new subjects, proceed with the payment, and you'll be all set to continue learning.
          <br/>
          <br/>
          <b>Tip:</b> Please double-check your subject selection before making the payment to avoid any mistakes.

          </>
        },
        {
          question: "How to Reset Your Password",
          answer: <>
          If you ever forget your password, don't worry! You can reset it in just a few simple steps:
          <br/>
          <br/>
          <ol>
            <li>1. Go to the login screen and click "Forgot Password."</li>
            <li>2. Enter the email address you used when creating your account.</li>
            <li>3. A password reset link will be sent to your email. Follow the instructions to set a new password.</li>
          </ol>
          <br/>
          <br/>
          <b>That's it!</b> You'll be back to learning in no time.

          </>
        }
      ]
    },
    {
        title: "Technical Issues FAQs",
        questions: [
          {
            question: "Why doesn't the 'Join' button work on Safari?",
            answer: <>
            This issue occurs because <b>pop-ups are disabled</b> on Safari. You can fix it by enabling pop-ups in your Safari settings.
            </>
          },
          {
            question: "Why doesn't the 'Join' button work on Chrome (Tablet)?",
            answer: <>
            If you are using Chrome on a tablet and experience this issue, go to the <b>Zoom page</b>, tap on the <b>three-dot menu</b>, and <b>disable 'Desktop Site' mode</b>. This should allow the Zoom app to open properly.
            </>
          },
          
        ]
      },
  ];