import * as React from 'react';
import './App.css';


class OnlineTicket extends React.Component<{}, any> {
	
	constructor( props: any ) {
		super(props);
		this.state = {
			isLoading: false,
			tickets: []
			
		}
	}
	
	public componentDidMount() {
		this.setState({isLoading: true});
		fetch("http://localhost:8080/api/tickets/alltickets")
			.then(response => response.json())
			.then(data => this.setState({tickets: data, isLoading: false}))
	}
	
	public render() {
		const {tickets, isLoading} = this.state;
		if ( isLoading ) {
			return <p>Loading...</p>
		}
		
		return (
			<>
			<div className="OnlineTicketComponent">
				<p>Hello from Online Ticket component!!</p>
			</div>
			<div>
				<h2> Ticket List</h2>
				{ tickets.map(( ticket: any ) =>
					<div key="ticket.id">
						{ ticket.passengerName }
					</div>
				) }
			</div>
			
			</>
		)
	}
}

export default OnlineTicket;