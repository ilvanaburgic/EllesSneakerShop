<?php

require_once __DIR__ . '/BaseDao.class.php';

class NewsletterDao extends BaseDao
{

  public function __construct()
  {
    parent::__construct("newsletter_subscribers");
  }

  public function add($subscriber)
  {
    return $this->insert('newsletter_subscribers', $subscriber);
  }

  // Other DAO methods can go here, like delete subscriber, get subscriber by email, etc.
}
