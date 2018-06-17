package io.github.jdiemke.ngforum.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.github.jdiemke.ngforum.model.Post;

@RestController
@RequestMapping("/post")
public class PostController {

    @RequestMapping(method = RequestMethod.GET)
    public Post[] getAllPosts() {
        return new Post[] {
            new Post("OpenGL", "It's magic!"),
            new Post("Gradle", "It's a hipster tool.")
        };
    }

}
