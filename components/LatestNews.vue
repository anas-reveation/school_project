<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <marquee id="myMarquee" class="h-marq" direction="up">
            <div class="row">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <a
                    href="https://aguidehub.com/blog/how-to-use-marquee-tag-in-bootstrap/"
                    class="primary fw-semibold"
                    >Scholastic Awards Honor</a
                  >
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <h5 class="primary fw-semibold">Scholastic Awards Honor</h5>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <h5 class="primary fw-semibold">Scholastic Awards Honor</h5>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <h5 class="primary fw-semibold">Scholastic Awards Honor</h5>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <h5 class="primary fw-semibold">Scholastic Awards Honor</h5>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-5">
                <img class="w-100" src="../assets/img/news-s.jpg" />
              </div>
              <div class="col-md-7">
                <div>
                  <h6>January 24 2020</h6>
                  <h5 class="primary fw-semibold">Scholastic Awards Honor</h5>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </p>
                  <hr class="hr-news" style="width: 10%" />
                  <h6>Posted in: Lunch</h6>
                </div>
              </div>
            </div>
          </marquee>
        </div>

        <div class="col-md-4 text-center negative-mt">
          <div class="bg-white bg-border">
            <p class="primary fw-semibold mb-0">FUN FACTS ABOUT ED</p>
            <div class="d-flex justify-content-center align-items-center">
              <hr class="hr-news" />
            </div>
            <div>
              <h2 class="primary">112%</h2>
              <p>STUDENTS</p>
              <h6>students receiving financial aid</h6>
            </div>
            <div class="mt-5">
              <h2 class="primary">112%</h2>
              <p>STUDENTS</p>
              <h6>students receiving financial aid</h6>
            </div>
            <div class="mt-5">
              <h2 class="primary">112%</h2>
              <p>STUDENTS</p>
              <h6>students receiving financial aid</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.negative-mt {
  margin-top: -14rem;
}
.negative-mt .bg-white {
  padding: 6rem;
}
.negative-mt .bg-white h2 {
  font-weight: 700;
}
.hr-news {
  border: 0;
  border-top: 4px solid;
  width: 25%;
  color: var(--tertiary);
  opacity: 1;
}
.bg-border {
  border-style: solid;
  border-width: 15px 0px 0px 0px;
  border-color: var(--tertiary);
}

.marquee {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 100px;
  text-align: center;
  transform: translateY(100%);
  animation: marquee 10s linear infinite;
}
.h-marq {
  height: 452px;
}
@keyframes marquee {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
.negative-mt::before {
  margin-top: 32rem;
  content: "";
  background: #3485b0;
  width: 128px;
  height: 202px;
  border-radius: 100% 0 0 100% / 50%;
  position: absolute;
  left: 86.97rem;
}
</style>
<script>
export default {
  mounted() {
    const marquee = document.querySelector("#myMarquee");
    marquee.addEventListener("mouseover", () => {
      marquee.stop();
    });
    marquee.addEventListener("mouseout", () => {
      marquee.start();
    });
  },
};
</script>
