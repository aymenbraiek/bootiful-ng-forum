package io.github.jdiemke.ngforum.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.jdiemke.ngforum.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
