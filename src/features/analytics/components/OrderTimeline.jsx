import timelineData from "../data/orderTimelineData.json";

const OrderTimeline = () => {
  const { title, events } = timelineData.orderTimeline;

  return (
    <div className="p-6 rounded-xl  h-full">
      <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>
      <ul className="timeline timeline-vertical timeline-compact -ml-4">
        {events.map((event, index) => (
          <li key={event.id}>
            {index !== 0 && <hr className="bg-gray-200" />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-6 ml-2">
              <div className="font-semibold text-gray-800 text-sm">
                {event.title}
              </div>
              <div className="text-xs text-gray-400 mt-1">{event.time}</div>
            </div>
            {index !== events.length - 1 && <hr className="bg-gray-200" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTimeline;
