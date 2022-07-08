import {
  CandidatePosted as CandidatePostedEvent,
  Initialized as InitializedEvent,
  NewVote as NewVoteEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  VoterStatusChanged as VoterStatusChangedEvent,
  VotingCreated as VotingCreatedEvent
} from "../generated/Voting/Voting"
import {
  Voting
} from "../generated/schema"

export function handleCandidatePosted(event: CandidatePostedEvent): void {
}


export function handleNewVote(event: NewVoteEvent): void {
}


export function handleVoterStatusChanged(event: VoterStatusChangedEvent): void {
}

export function handleVotingCreated(event: VotingCreatedEvent): void {
  let entity = new Voting(
    event.params.id.toHex()
  )
  entity.title = event.params.title
  entity.description = event.params.description
  entity.countdown = event.params.countdown
 // entity.id = event.params.id.toString()
  entity.save()
}
