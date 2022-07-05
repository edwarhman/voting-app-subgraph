import {
  CandidatePosted as CandidatePostedEvent,
  Initialized as InitializedEvent,
  NewVote as NewVoteEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  VoterStatusChanged as VoterStatusChangedEvent,
  VotingCreated as VotingCreatedEvent
} from "../generated/Voting/Voting"
import {
  CandidatePosted,
  Initialized,
  NewVote,
  OwnershipTransferred,
  VoterStatusChanged,
  VotingCreated
} from "../generated/schema"

export function handleCandidatePosted(event: CandidatePostedEvent): void {
  let entity = new CandidatePosted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.voting = event.params.voting
  entity.name = event.params.name
  entity.addr = event.params.addr
  entity.id = event.params.id
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleNewVote(event: NewVoteEvent): void {
  let entity = new NewVote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.voting = event.params.voting
  entity.voter = event.params.voter
  entity.candidate = event.params.candidate
  entity.candidateVotes = event.params.candidateVotes
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleVoterStatusChanged(event: VoterStatusChangedEvent): void {
  let entity = new VoterStatusChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.voting = event.params.voting
  entity.status = event.params.status
  entity.save()
}

export function handleVotingCreated(event: VotingCreatedEvent): void {
  let entity = new VotingCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.title = event.params.title
  entity.description = event.params.description
  entity.countdown = event.params.countdown
  entity.id = event.params.id
  entity.save()
}
