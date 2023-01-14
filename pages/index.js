import { MongoClient } from "mongodb";
import MeetUpList from '../components/meetups/MeetupList';
import Head from "next/head";
import { Fragment } from "react";


function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetUpList meetups={props.meetups}/>
    </Fragment>
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect(process.env.MONGO_CLIENT);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image : meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 10
  };
}

export default HomePage;
