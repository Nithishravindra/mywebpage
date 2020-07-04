import React from 'react'
import Layout from '../layout/Layout'
import SocialLinks from '../data/socialLinks'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <Layout>
        <h2 className="social-heading">Contact Me</h2>

        <div className="form-align">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mleppdpr"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            ></input>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
            {status === 'SUCCESS' ? (
              <p>Thanks!</p>
            ) : (
              <button className="form-button">SUBMIT</button>
            )}
            {status === 'ERROR' && <p>Oops! Retry.</p>}
          </form>
        </div>
        <SocialLinks className="social-link-position" />
      </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
