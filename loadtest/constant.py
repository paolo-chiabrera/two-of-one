from locust import HttpUser, TaskSet, task
from locust import LoadTestShape, constant_pacing
import uuid


class UserTasks(TaskSet):
    @task
    def my_task(self):
        id = uuid.uuid4()
        self.client.get(f'/?id={id}')

class WebsiteUser(HttpUser):
    wait_time = constant_pacing(1)
    tasks = [UserTasks]
