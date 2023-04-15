// our-domain.com/new-meetup
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      router.push("/");
    } else {
      const data = await response.text();
      console.log("Error:", data);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
