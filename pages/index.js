import MeetUpList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: 'Chicago Meetup',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: '20 E Chestnut street, Chicago IL 60611, US',
    description: 'This is a first meetup!'
  },
  {
    id: "m2",
    title: 'London Meetup',
    image: 'https://images.unsplash.com/photo-1532444143931-9f60a76242e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    address: `6 Waterloo Pl, St. James's, London SW1Y 4AN, UK`,
    description: 'This is an advanced level meetup !'
  }
]

function HomePage(props) {

  return <MeetUpList meetups={props.meetups}/>
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;
