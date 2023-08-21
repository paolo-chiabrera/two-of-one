from locust import HttpUser, TaskSet, task, constant, LoadTestShape
import json
import os

class MyUser(HttpUser):
    host = "https://nuxt.sillyapps.io"

    @task
    def my_task(self):
        with self.client.get("/load-test", catch_response=True) as resp:
            if (resp.status_code == 200):
                resp.success()
            else:
                resp.failure("bad response " + str(resp.status_code) + "==" + str(resp.headers))