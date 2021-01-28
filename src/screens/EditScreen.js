import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Context } from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostFrom"

const EditScreen = ({ navigation }) => {

    // console.log(navigation.getParam("id"))

    const { state } = useContext(Context) 

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam("id"))

    return <BlogPostForm />
}

const styles = StyleSheet.create({})

export default EditScreen