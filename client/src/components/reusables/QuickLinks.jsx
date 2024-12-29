/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const QuickLinks = ({ Links }) => {
  return (
    <section className="hidden md:block mt-8">
      <div className="flex gap-x-6 items-center">
        <h4 className="font-bold text-[18px] text-primary-base">Quick Links</h4>
        <nav>
          <ul className="flex gap-x-6">
            { Links.map(({ url, title }, index) => <li key={index} className="text-light-red-800 text-base"><Link to={`${url}`}>{title}</Link></li>) }
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default QuickLinks;