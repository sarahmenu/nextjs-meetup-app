import { MongoClient } from "mongodb";
import MeetUpList from '../components/meetups/MeetupList';

function HomePage(props) {

  return <MeetUpList meetups={props.meetups}/>
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
