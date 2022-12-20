import Link from 'next/link';
import {getAllEventsData} from '../src/events'

type EventData = {
    slug: string,
    title: string,
    date: string,
    excerpt: string,
}

export default function Events({allEventsData}: {allEventsData: EventData[]}){
    return(
        <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 6rem"}}>
            <h1><b>Events</b></h1>
            <ul style={{listStyle: "None"}}>
            {allEventsData.map(({slug, date, title, excerpt}: EventData) => (
                <li key={slug}>
                    <Link href = {`/events/${slug}`}>{title}</Link>
                    <br/>
                    <small>{excerpt}</small>
                </li>
            ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const allEventsData = getAllEventsData();
    console.log(`All posts: ${allEventsData}`)
    return {
      props: {
        allEventsData,
      },
    };
  }
  