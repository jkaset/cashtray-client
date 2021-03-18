
import React, { useContext, useState, useEffect } from "react"
import { RewardContext } from "./RewardProvider"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const RewardForm = (props) => {
    const { addReward } = useContext(RewardContext)

    const [reward, setReward] = useState({
        user: (localStorage.getItem("cashtray_token")),
        reward_name: "",
        reward_cost: "",
    })


    const changeRewardState = (domEvent) => {
        const newRewardState = Object.assign({}, reward)
        newRewardState[domEvent.target.name] = domEvent.target.value
        setReward(newRewardState)
    }

    return (
  <>
        <Container>
            <h3>Create Reward</h3>
            <Form>

                <Form.Group>
                    <Form.Label> Name it</Form.Label>
                    <Form.Control type="text" name="reward_name" defaultValue={reward.reward_name} onChange={changeRewardState} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Reward Cost</Form.Label>
                    <Form.Control type="text" name="reward_cost" defaultValue={reward.reward_cost} onChange={changeRewardState} />
                </Form.Group>
            </Form>

            <Button variant="secondary" type="submit"
                onClick={event => {
                    event.preventDefault()
                    addReward(reward)
                        .then(props.history.push("/wallet"))
                }}> submit </Button>

        </Container>
   


  </>
)
}