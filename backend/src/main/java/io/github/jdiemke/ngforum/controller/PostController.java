package io.github.jdiemke.ngforum.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.github.jdiemke.ngforum.model.Post;
import io.github.jdiemke.ngforum.persistence.PostRepository;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

}
