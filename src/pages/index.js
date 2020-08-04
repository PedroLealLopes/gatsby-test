import React from "react"
import Layout from '../components/Layout'
import { ExampleButton } from '../components/button'

export default function Home() {
  return <Layout>
    <h1>Hello from gatsby</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore ullam accusamus voluptatum omnis suscipit numquam, eius dolor. Aspernatur deserunt accusantium repudiandae qui, enim vitae.</p>
    <ExampleButton>Click me</ExampleButton>
  </Layout>
}
