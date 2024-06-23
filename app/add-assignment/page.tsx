import React from 'react'

export default function Page() {
  return (
    <div>
      <div>
        <form action="">
            <h3>Enter Assignment Details</h3>
            <div>
                <div>
                    <label htmlFor="image">Assignment Image</label>
                <input type="image" placeholder="Assignment Image" />
                </div>
                <div>
                    <label htmlFor="text">Assignment Name</label>
                <input type="text" placeholder="Assignment Name" />
                </div>
                <div>
                    <label htmlFor="link">Assignment link</label>
                <input type="link" placeholder="Assignment link" />
                </div>
                <div>
                    <label htmlFor="link">Assignment Description</label>
                    <textarea name="text" id="description" placeholder='Assignment Description'></textarea>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}
