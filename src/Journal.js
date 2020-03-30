import React from 'react';
import { Link } from 'react-router-dom';

class Journal extends React.Component {
    constructor(props) {
        super(props);

        let currentDate = new Date().toISOString().split('T')[0];

        let defaultDate = currentDate.split('-')[1] + '/' + currentDate.split('-')[2] + '/' + currentDate.split('-')[0];

        this.state = {
            journalDate: defaultDate,
            journalThoughts: '',
            toJournal: false
        }
    }

    componentDidMount() {
        document.getElementById('journal-thoughts').focus();
    }

    render() {
        return (
            <div className="mw-700 mx-auto">
                <header className="container-fluid b-header ht4">
                    <div className="row">
                        <div className="col-10">
                            <dl className="mb-0 mt-soul">
                                <dt className="c-soul">SOUL</dt>
                                <dd className="italic mb-0">THERAPY</dd>
                            </dl>
                        </div>
                        <div className="col-2 mt-4 text-right">
                            <Link to="/Splash" className="c-light pl-0 pr-1">Logout</Link>
                        </div>
                    </div>
                </header>
                <main>
                <h2 className="mt-4 c-soul">Journal</h2>
                    <form onSubmit={this.handleSubmit} className="mt-4">
                        <div className="form-group">
                            <label>Date</label>
                            <input type="text" className="form-control" name="journal-date" id="journal-date"
                                value={this.state.journalDate}
                                onChange={e => this.setState({journalDate: e.target.value})} />
                            <div className="invalid-feedback" id="invalid-journal-date">
                                Invalid Date
                            </div>    
                            <div className="invalid-feedback" id="journal-date-required">
                                Please enter Date.
                            </div>
                        </div>
                        <h1 className="my-5">Provoker Text Displayed Here</h1>
                        <div className="form-group">
                            <label>Thoughts</label>
                            <textarea className="form-control" name="journal-thoughts" id="journal-thoughts" rows="5"
                            value={this.state.journalThoughts}
                            onChange={e => this.setState({journalThoughts: e.target.value})} />
                            <div className="invalid-feedback" id="thoughts-required">
                                Please enter your thoughts.
                            </div>
                        </div>
                        <button className="btn btn-outline-primary c-soul mb-4">Save</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default Journal;