import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {

  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      title="Chicago Meetup"
      address="20 E Chestnut street, Chicago IL 60611, US" description="This is a first meetup!"/>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return{
    props: {
      meetupData: {
        image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : meetupId,
        title: "Chicago Meetup",
        address: "20 E Chestnut street, Chicago IL 60611, US",
        description: "This is a first meetup!"
      }
    }
  }
}

export default MeetupDetails;
