'use client'
import { useState, useEffect } from 'react'

export default function JobOffers () {
  const [jobOffer, setJobOffer] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1337/api/offers/1', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 7c38daf07aabc6f67968cc06c79faf564138905fe5e1e6ee3d520600868db067b6b659e41adc6994d6caa3fb3736bdd8c51ae796638e63e8d9b550b7d906e9573d8c5440afaea2a0e4f971087dbd33d73068385fc8e923e7ba0616873cd466409be9d1b26bc108b1cb557e5b9add72e29f61d1a2a3769766e67e10c376a4b2d5',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data)
        setJobOffer(data.data.attributes)
      })
      .catch(error => console.error('Error fetching job offer:', error))
  }, [])

  return (
    <>
      <h1 className='text-4xl text-center my-8'>MDS Job Offers</h1>
      {jobOffer && (
        <div>
          <h2>{jobOffer.Title}</h2>
          <p>Description:</p>
          {jobOffer.Description && jobOffer.Description.map((paragraph, index) => (
            <p key={index}>{paragraph.children.map(child => child.text)}</p>
          ))}
          <p>Skills: {jobOffer.skills.join(', ')}</p>
          <p>Education: {jobOffer.education.join(', ')}</p>
          <p>Start Date: {jobOffer.start_date}</p>
        </div>
      )}
    </>
  )
}
